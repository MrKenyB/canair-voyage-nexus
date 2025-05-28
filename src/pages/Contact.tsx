
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plane, Mail, Phone, MapPin, Clock, ArrowLeft, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulation de l'envoi du message
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
      
      // Reset du formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      toast.error('Une erreur est survenue lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-canair-blue" onClick={() => navigate('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à l'accueil
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
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-canair-blue mb-4">Contactez-nous</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos voyages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-canair-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-canair-blue flex items-center gap-2">
                  <Send className="w-6 h-6" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-canair-blue font-semibold">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="border-canair-blue/30 focus:border-canair-blue"
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-canair-blue font-semibold">
                        Adresse email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-canair-blue/30 focus:border-canair-blue"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-canair-blue font-semibold">
                      Sujet *
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="border-canair-blue/30 focus:border-canair-blue"
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-canair-blue font-semibold">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="border-canair-blue/30 focus:border-canair-blue"
                      placeholder="Votre message..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-canair-red hover:bg-canair-red/90 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-canair-blue/20">
                <CardHeader>
                  <CardTitle className="text-canair-blue">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-canair-blue/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-canair-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-canair-blue mb-1">Téléphone</h3>
                      <p className="text-gray-600">+243 XXX XXX XXX</p>
                      <p className="text-sm text-gray-500">Lundi - Vendredi : 8h - 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-canair-blue/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-canair-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-canair-blue mb-1">Email</h3>
                      <p className="text-gray-600">info@canair-congo.com</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-canair-blue/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-canair-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-canair-blue mb-1">Adresse</h3>
                      <p className="text-gray-600">Aéroport International de Kinshasa</p>
                      <p className="text-gray-600">Kinshasa, République Démocratique du Congo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-canair-blue/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-canair-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-canair-blue mb-1">Horaires d'ouverture</h3>
                      <p className="text-gray-600">Lundi - Vendredi : 8h00 - 18h00</p>
                      <p className="text-gray-600">Samedi : 9h00 - 15h00</p>
                      <p className="text-gray-600">Dimanche : Fermé</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-canair-blue/20">
                <CardHeader>
                  <CardTitle className="text-canair-blue">Questions fréquentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Comment modifier ma réservation ?</h4>
                    <p className="text-sm text-gray-600">Connectez-vous à votre espace personnel ou contactez notre service client.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Quels sont les documents requis ?</h4>
                    <p className="text-sm text-gray-600">Une pièce d'identité valide est obligatoire pour tous les vols domestiques.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Bagages autorisés ?</h4>
                    <p className="text-sm text-gray-600">20kg en soute inclus dans le prix du billet, 8kg en cabine.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
