
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Plane, Users, Clock, MapPin, Star, Shield, Globe, CheckCircle, Menu, X } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center shadow-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-canair-blue"><strong>CANAIR CONGO</strong></h1>
                <p className="text-sm text-gray-600">Canadian Airways Congo</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <button onClick={() => navigate('/')} className="text-canair-blue hover:text-canair-red transition-colors font-medium">Accueil</button>
              <button onClick={() => navigate('/search')} className="text-canair-blue hover:text-canair-red transition-colors font-medium">Vols</button>
              <button onClick={() => navigate('/profile')} className="text-canair-blue hover:text-canair-red transition-colors font-medium">Mes Réservations</button>
              <button onClick={() => navigate('/contact')} className="text-canair-blue hover:text-canair-red transition-colors font-medium">Contact</button>
            </nav>
            
            {/* Auth Buttons */}
            <div className="hidden lg:flex space-x-3">
              <Button 
                variant="outline" 
                className="border-canair-blue text-canair-blue hover:bg-canair-blue hover:text-white transition-all"
                onClick={() => navigate('/login')}
              >
                Connexion
              </Button>
              <Button 
                className="bg-canair-red hover:bg-canair-red/90 text-white shadow-lg"
                onClick={() => navigate('/register')}
              >
                Inscription
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3 mt-4">
                <button onClick={() => navigate('/')} className="text-left text-canair-blue hover:text-canair-red transition-colors">Accueil</button>
                <button onClick={() => navigate('/search')} className="text-left text-canair-blue hover:text-canair-red transition-colors">Vols</button>
                <button onClick={() => navigate('/profile')} className="text-left text-canair-blue hover:text-canair-red transition-colors">Mes Réservations</button>
                <button onClick={() => navigate('/contact')} className="text-left text-canair-blue hover:text-canair-red transition-colors">Contact</button>
                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-canair-blue text-canair-blue"
                    onClick={() => navigate('/login')}
                  >
                    Connexion
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-canair-red hover:bg-canair-red/90 text-white"
                    onClick={() => navigate('/register')}
                  >
                    Inscription
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Airplane Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Airplane Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=3498&q=80" 
            alt="Avion en vol" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-canair-blue/80 via-canair-navy/70 to-canair-blue/60"></div>
        </div>

        {/* Floating airplane elements */}
        <div className="absolute top-20 right-10 opacity-20 animate-bounce">
          <Plane className="w-16 h-16 text-white transform rotate-45" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-15 animate-pulse">
          <Plane className="w-12 h-12 text-canair-gold transform -rotate-12" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Main Heading */}
          <div className="animate-fade-in mb-12">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Volez avec confiance
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-canair-gold mb-8">
              <strong>CANAIR CONGO</strong>
            </h3>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Votre compagnie aérienne de référence pour tous vos déplacements à travers le Congo. 
              Excellence, ponctualité et sécurité à chaque vol.
            </p>
          </div>

          {/* Search Form */}
          <Card className="max-w-5xl mx-auto animate-slide-up bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-canair-blue flex items-center justify-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-white" />
                </div>
                Réservez votre vol
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="departure" className="text-canair-blue font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Ville de départ
                  </Label>
                  <Select value={searchData.departure} onValueChange={(value) => setSearchData({...searchData, departure: value})}>
                    <SelectTrigger className="border-canair-blue/30 focus:border-canair-blue h-12">
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
                  <Label htmlFor="arrival" className="text-canair-blue font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Ville d'arrivée
                  </Label>
                  <Select value={searchData.arrival} onValueChange={(value) => setSearchData({...searchData, arrival: value})}>
                    <SelectTrigger className="border-canair-blue/30 focus:border-canair-blue h-12">
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
                  <Label htmlFor="date" className="text-canair-blue font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date de départ
                  </Label>
                  <Input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    className="border-canair-blue/30 focus:border-canair-blue h-12"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passengers" className="text-canair-blue font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Passagers
                  </Label>
                  <Select value={searchData.passengers} onValueChange={(value) => setSearchData({...searchData, passengers: value})}>
                    <SelectTrigger className="border-canair-blue/30 focus:border-canair-blue h-12">
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
                className="w-full md:w-auto bg-gradient-to-r from-canair-red to-canair-gold hover:from-canair-red/90 hover:to-canair-gold/90 text-white py-4 px-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Plane className="w-5 h-5 mr-3" />
                Rechercher des vols
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section with Airplane Visuals */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background airplane silhouette */}
        <div className="absolute top-10 right-0 opacity-5">
          <Plane className="w-96 h-96 text-canair-blue transform rotate-12" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-canair-blue mb-4">
              Pourquoi choisir <strong>CANAIR CONGO</strong> ?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une expérience de voyage exceptionnelle avec des standards internationaux
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-canair-blue to-canair-navy rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-canair-blue mb-4">Ponctualité</h4>
                <p className="text-gray-600 leading-relaxed">
                  Nos vols respectent scrupuleusement les horaires pour votre tranquillité d'esprit et votre planification
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-canair-red to-canair-gold rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-canair-blue mb-4">Service Premium</h4>
                <p className="text-gray-600 leading-relaxed">
                  Un service client exceptionnel et personnalisé à chaque étape de votre voyage avec nous
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-br from-canair-gold to-canair-gold-light rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-semibold text-canair-blue mb-4">Couverture Nationale</h4>
                <p className="text-gray-600 leading-relaxed">
                  Nous desservons toutes les principales villes du Congo avec des liaisons quotidiennes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-canair-blue to-canair-navy relative overflow-hidden">
        {/* Airplane graphics */}
        <div className="absolute top-0 left-0 opacity-10">
          <Plane className="w-32 h-32 text-white transform -rotate-45" />
        </div>
        <div className="absolute bottom-0 right-0 opacity-10">
          <Plane className="w-40 h-40 text-canair-gold transform rotate-45" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80">Années d'expérience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">12</div>
              <div className="text-white/80">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50k+</div>
              <div className="text-white/80">Passagers satisfaits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-white/80">Ponctualité</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-canair-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="text-xl font-black"><strong>CANAIR CONGO</strong></h5>
                  <p className="text-sm text-white/80">Canadian Airways Congo</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Votre compagnie aérienne de confiance depuis plus de 10 ans. 
                Excellence et sécurité à chaque vol.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h6 className="font-semibold mb-6 text-canair-gold">Services</h6>
              <ul className="space-y-3 text-white/80">
                <li><button onClick={() => navigate('/search')} className="hover:text-canair-gold transition-colors">Réservation en ligne</button></li>
                <li><button onClick={() => navigate('/profile')} className="hover:text-canair-gold transition-colors">Gestion des réservations</button></li>
                <li><button onClick={() => navigate('/profile')} className="hover:text-canair-gold transition-colors">Check-in en ligne</button></li>
                <li><button onClick={() => navigate('/contact')} className="hover:text-canair-gold transition-colors">Support client</button></li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-6 text-canair-gold">Destinations populaires</h6>
              <ul className="space-y-3 text-white/80">
                <li>Kinshasa</li>
                <li>Lubumbashi</li>
                <li>Goma</li>
                <li>Bukavu</li>
              </ul>
            </div>

            <div>
              <h6 className="font-semibold mb-6 text-canair-gold">Contact</h6>
              <ul className="space-y-3 text-white/80">
                <li>+242 xxxxxxxxx</li>
                <li>info@canair-congo.com</li>
                <li>Pointe Noire, Congo Brazzaville</li>
                <li className="pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-canair-gold text-canair-gold hover:bg-canair-gold hover:text-canair-blue"
                    onClick={() => navigate('/contact')}
                  >
                    Nous contacter
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/80">
            <p>&copy; 2024 <strong>CANAIR CONGO</strong> - Tous droits réservés | Conçu à Pointe Noire, Congo Brazzaville</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
