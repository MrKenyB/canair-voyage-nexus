
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Plane, User, Mail, Phone, ArrowLeft, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const [passengerData, setPassengerData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: 'Congolaise',
    passportNumber: '',
    specialRequests: ''
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Données du vol sélectionné (normalement passées via l'état de navigation)
  const selectedFlight = {
    id: 'CA101',
    departure: 'Kinshasa',
    arrival: 'Lubumbashi',
    departureTime: '08:30',
    arrivalTime: '11:45',
    date: '27 mai 2024',
    price: 85000,
    aircraft: 'Boeing 737'
  };

  const handleInputChange = (field: string, value: string) => {
    setPassengerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTermsChange = (checked: boolean | "indeterminate") => {
    setAcceptedTerms(checked === true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      toast.error('Veuillez accepter les conditions générales');
      return;
    }

    // Validation basique
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth'];
    const missingFields = requiredFields.filter(field => !passengerData[field as keyof typeof passengerData]);
    
    if (missingFields.length > 0) {
      toast.error('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsSubmitting(true);
    
    // Simulation de l'envoi de la réservation
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Réservation confirmée ! Un email de confirmation vous a été envoyé.');
      
      // Redirection vers la page de profil ou d'accueil
      setTimeout(() => {
        navigate('/profile');
      }, 2000);
      
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-CD', {
      style: 'currency',
      currency: 'CDF'
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-canair-blue" onClick={() => navigate('/search')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux résultats
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-canair-blue">CANAIR CONGO</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="border-canair-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-canair-blue flex items-center gap-2">
                  <User className="w-6 h-6" />
                  Informations du passager
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-canair-blue font-semibold">
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        value={passengerData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="border-canair-blue/30 focus:border-canair-blue"
                        placeholder="Votre prénom"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="lastName" className="text-canair-blue font-semibold">
                        Nom de famille *
                      </Label>
                      <Input
                        id="lastName"
                        value={passengerData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="border-canair-blue/30 focus:border-canair-blue"
                        placeholder="Votre nom de famille"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-canair-blue font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={passengerData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-canair-blue/30 focus:border-canair-blue"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-canair-blue font-semibold">
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={passengerData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-canair-blue/30 focus:border-canair-blue"
                        placeholder="+243 XXX XXX XXX"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-canair-blue font-semibold">
                        Date de naissance *
                      </Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={passengerData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className="border-canair-blue/30 focus:border-canair-blue"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="nationality" className="text-canair-blue font-semibold">
                        Nationalité
                      </Label>
                      <Select value={passengerData.nationality} onValueChange={(value) => handleInputChange('nationality', value)}>
                        <SelectTrigger className="border-canair-blue/30 focus:border-canair-blue">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="Congolaise">Congolaise (RDC)</SelectItem>
                          <SelectItem value="Congolaise (RC)">Congolaise (RC)</SelectItem>
                          <SelectItem value="Autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="passportNumber" className="text-canair-blue font-semibold">
                      Numéro de passeport (optionnel)
                    </Label>
                    <Input
                      id="passportNumber"
                      value={passengerData.passportNumber}
                      onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                      className="border-canair-blue/30 focus:border-canair-blue"
                      placeholder="Numéro de passeport"
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequests" className="text-canair-blue font-semibold">
                      Demandes spéciales (optionnel)
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={passengerData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      className="border-canair-blue/30 focus:border-canair-blue"
                      placeholder="Régime alimentaire, assistance spéciale, etc."
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={acceptedTerms}
                      onCheckedChange={handleTermsChange}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      J'accepte les{' '}
                      <a href="#" className="text-canair-blue hover:underline">
                        conditions générales
                      </a>{' '}
                      et la{' '}
                      <a href="#" className="text-canair-blue hover:underline">
                        politique de confidentialité
                      </a>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-canair-red hover:bg-canair-red/90 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Traitement en cours...' : 'Confirmer la réservation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Flight Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-canair-blue/20">
              <CardHeader>
                <CardTitle className="text-canair-blue">Récapitulatif du vol</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-canair-blue/5 rounded-lg">
                  <div className="text-2xl font-bold text-canair-blue mb-2">
                    {selectedFlight.departure} → {selectedFlight.arrival}
                  </div>
                  <div className="text-canair-gold font-semibold">{selectedFlight.date}</div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Vol</span>
                    <span className="font-semibold">{selectedFlight.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Départ</span>
                    <span className="font-semibold">{selectedFlight.departureTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Arrivée</span>
                    <span className="font-semibold">{selectedFlight.arrivalTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Appareil</span>
                    <span className="font-semibold">{selectedFlight.aircraft}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total à payer</span>
                    <span className="text-canair-red">{formatPrice(selectedFlight.price)}</span>
                  </div>
                  <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2 text-yellow-800">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-semibold">Paiement sur place</span>
                    </div>
                    <p className="text-xs text-yellow-700 mt-1">
                      Vous paierez directement à l'aéroport lors de l'enregistrement
                    </p>
                  </div>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Arrivez 2h avant le départ</p>
                  <p>• Pièce d'identité obligatoire</p>
                  <p>• Bagages : 20kg inclus</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
