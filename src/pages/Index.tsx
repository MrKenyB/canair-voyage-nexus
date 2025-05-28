
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Plane, Users, Clock, MapPin, Star } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    departure: '',
    arrival: '',
    date: '',
    passengers: '1'
  });

  const congoCities = [
    'Kinshasa', 'Brazzaville', 'Lubumbashi', 'Mbuji-Mayi', 'Kisangani',
    'Kananga', 'Likasi', 'Kolwezi', 'Tshikapa', 'Beni', 'Bukavu', 'Goma'
  ];

  const handleSearch = () => {
    if (!searchData.departure || !searchData.arrival || !searchData.date) {
      toast.error('Veuillez remplir tous les champs de recherche');
      return;
    }
    
    toast.success('Recherche de vols en cours...');
    navigate('/search');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-canair-blue via-canair-navy to-canair-blue-light">
      {/* Header Navigation */}
      <header className="relative z-10 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-canair-blue">CANAIR CONGO</h1>
                <p className="text-sm text-gray-600">Canadian Airways Congo</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => navigate('/')} className="text-canair-blue hover:text-canair-red transition-colors">Accueil</button>
              <button onClick={() => navigate('/profile')} className="text-canair-blue hover:text-canair-red transition-colors">Mes Réservations</button>
              <button onClick={() => navigate('/contact')} className="text-canair-blue hover:text-canair-red transition-colors">Contact</button>
            </nav>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                className="border-canair-blue text-canair-blue hover:bg-canair-blue hover:text-white"
                onClick={() => navigate('/login')}
              >
                Connexion
              </Button>
              <Button 
                className="bg-canair-red hover:bg-canair-red/90 text-white"
                onClick={() => navigate('/register')}
              >
                Inscription
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Volez avec 
              <span className="text-canair-gold"> CANAIR CONGO</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Votre compagnie aérienne de confiance pour tous vos déplacements à travers le Congo
            </p>
          </div>

          {/* Search Card */}
          <Card className="max-w-4xl mx-auto mt-12 animate-slide-up bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-canair-blue flex items-center justify-center gap-2">
                <Plane className="w-6 h-6" />
                Rechercher un vol
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="departure" className="text-canair-blue font-semibold">Ville de départ</Label>
                  <Select value={searchData.departure} onValueChange={(value) => setSearchData({...searchData, departure: value})}>
                    <SelectTrigger className="border-canair-blue/30 focus:border-canair-blue">
                      <SelectValue placeholder="Choisir une ville" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {congoCities.map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="arrival" className="text-canair-blue font-semibold">Ville d'arrivée</Label>
                  <Select value={searchData.arrival} onValueChange={(value) => setSearchData({...searchData, arrival: value})}>
                    <SelectTrigger className="border-canair-blue/30 focus:border-canair-blue">
                      <SelectValue placeholder="Choisir une ville" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {congoCities.filter(city => city !== searchData.departure).map(city => (
                        <SelectItem key={city} value={city}>{city}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date" className="text-canair-blue font-semibold">Date de départ</Label>
                  <Input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    className="border-canair-blue/30 focus:border-canair-blue"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passengers" className="text-canair-blue font-semibold">Passagers</Label>
                  <Select value={searchData.passengers} onValueChange={(value) => setSearchData({...searchData, passengers: value})}>
                    <SelectTrigger className="border-canair-blue/30 focus:border-canair-blue">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {[1,2,3,4,5,6,7,8,9].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num} passager{num > 1 ? 's' : ''}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleSearch}
                className="w-full md:w-auto bg-canair-red hover:bg-canair-red/90 text-white py-3 px-8 text-lg font-semibold"
              >
                <Plane className="w-5 h-5 mr-2" />
                Rechercher des vols
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-canair-blue mb-12">
            Pourquoi choisir CANAIR CONGO ?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-canair-blue/20">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-canair-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-canair-blue mb-2">Ponctualité</h4>
                <p className="text-gray-600">Nos vols respectent les horaires pour votre tranquillité d'esprit</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-canair-blue/20">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-canair-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-canair-blue mb-2">Service de qualité</h4>
                <p className="text-gray-600">Un service client exceptionnel à chaque étape de votre voyage</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-canair-blue/20">
              <CardContent className="pt-6">
                <MapPin className="w-12 h-12 text-canair-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-canair-blue mb-2">Réseau étendu</h4>
                <p className="text-gray-600">Desservons toutes les principales villes du Congo</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-canair-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-bold">CANAIR CONGO</h5>
                  <p className="text-sm text-white/80">Canadian Airways Congo</p>
                </div>
              </div>
              <p className="text-white/80">Votre compagnie aérienne de confiance depuis plus de 10 ans.</p>
            </div>

            <div>
              <h6 className="font-semibold mb-4">Services</h6>
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => navigate('/search')} className="hover:text-canair-gold transition-colors">Réservation en ligne</button></li>
                <li><button onClick={() => navigate('/profile')} className="hover:text-canair-gold transition-colors">Gestion des réservations</button></li>
                <li><button onClick={() => navigate('/profile')} className="hover:text-canair-gold transition-colors">Check-in en ligne</button></li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-4">Destinations</h6>
              <ul className="space-y-2 text-white/80">
                <li>Kinshasa</li>
                <li>Lubumbashi</li>
                <li>Goma</li>
                <li>Bukavu</li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-4">Contact</h6>
              <ul className="space-y-2 text-white/80">
                <li>+243 XXX XXX XXX</li>
                <li>info@canair-congo.com</li>
                <li>Kinshasa, RD Congo</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
            <p>&copy; 2024 CANAIR CONGO - Tous droits réservés</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
