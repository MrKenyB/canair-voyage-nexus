
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plane, User, Mail, Phone, Calendar, MapPin, Clock, Edit, Download } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Jean',
    lastName: 'Mukendi',
    email: 'jean.mukendi@email.com',
    phone: '+243 XXX XXX XXX',
    dateOfBirth: '1985-03-15',
    nationality: 'Congolaise'
  });

  // Données fictives des réservations
  const bookings = [
    {
      id: 'CAR-2024-001',
      flightNumber: 'CA101',
      route: 'Kinshasa → Lubumbashi',
      date: '2024-06-15',
      time: '08:30',
      status: 'Confirmé',
      price: 85000,
      passengers: 1
    },
    {
      id: 'CAR-2024-002',
      flightNumber: 'CA205',
      route: 'Lubumbashi → Kinshasa',
      date: '2024-06-20',
      time: '14:20',
      status: 'En attente',
      price: 92000,
      passengers: 1
    },
    {
      id: 'CAR-2024-003',
      flightNumber: 'CA309',
      route: 'Kinshasa → Goma',
      date: '2024-05-10',
      time: '19:45',
      status: 'Terminé',
      price: 95000,
      passengers: 2
    }
  ];

  const handleSaveProfile = () => {
    toast.success('Profil mis à jour avec succès');
    setIsEditing(false);
  };

  const handleLogout = () => {
    toast.success('Déconnexion réussie');
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmé':
        return 'bg-green-100 text-green-800';
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Terminé':
        return 'bg-gray-100 text-gray-800';
      case 'Annulé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-canair-blue">CANAIR CONGO</h1>
                <p className="text-sm text-gray-600">Espace Passager</p>
              </div>
            </div>
            
            <nav className="flex space-x-4">
              <Button 
                variant="outline" 
                className="border-canair-blue text-canair-blue"
                onClick={() => navigate('/')}
              >
                Retour à l'accueil
              </Button>
              <Button 
                variant="outline" 
                className="border-canair-red text-canair-red"
                onClick={handleLogout}
              >
                Déconnexion
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-canair-blue/20">
              <CardContent className="pt-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-canair-blue to-canair-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-canair-blue mb-1">
                  {userData.firstName} {userData.lastName}
                </h3>
                <p className="text-gray-600 mb-4">{userData.email}</p>
                <Badge className="bg-canair-gold/10 text-canair-gold border-canair-gold">
                  Passager régulier
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="bookings" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="bookings">Mes Réservations</TabsTrigger>
                <TabsTrigger value="profile">Mon Profil</TabsTrigger>
              </TabsList>

              {/* Bookings Tab */}
              <TabsContent value="bookings" className="space-y-6">
                <Card className="border-canair-blue/20">
                  <CardHeader>
                    <CardTitle className="text-canair-blue flex items-center gap-2">
                      <Plane className="w-5 h-5" />
                      Mes réservations ({bookings.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <Card key={booking.id} className="border-gray-200">
                          <CardContent className="p-4">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <Badge variant="secondary" className="bg-canair-blue text-white">
                                    {booking.flightNumber}
                                  </Badge>
                                  <Badge className={getStatusColor(booking.status)}>
                                    {booking.status}
                                  </Badge>
                                </div>
                                
                                <div className="space-y-1">
                                  <div className="flex items-center gap-2 font-semibold text-canair-blue">
                                    <MapPin className="w-4 h-4" />
                                    {booking.route}
                                  </div>
                                  <div className="flex items-center gap-4 text-sm text-gray-600">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-4 h-4" />
                                      {new Date(booking.date).toLocaleDateString('fr-FR')}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Clock className="w-4 h-4" />
                                      {booking.time}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="text-right">
                                <div className="text-2xl font-bold text-canair-red mb-2">
                                  {formatPrice(booking.price)}
                                </div>
                                <div className="text-sm text-gray-600 mb-3">
                                  {booking.passengers} passager{booking.passengers > 1 ? 's' : ''}
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" size="sm" className="border-canair-blue text-canair-blue">
                                    <Download className="w-4 h-4 mr-1" />
                                    Billet
                                  </Button>
                                  {booking.status === 'Confirmé' && (
                                    <Button size="sm" className="bg-canair-red hover:bg-canair-red/90 text-white">
                                      Gérer
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {bookings.length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        <Plane className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                        <p className="text-lg mb-2">Aucune réservation</p>
                        <p className="text-sm">Vous n'avez pas encore effectué de réservation.</p>
                        <Button 
                          className="mt-4 bg-canair-blue hover:bg-canair-blue/90 text-white"
                          onClick={() => navigate('/')}
                        >
                          Réserver un vol
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card className="border-canair-blue/20">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-canair-blue flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Informations personnelles
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                        className="border-canair-blue text-canair-blue"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        {isEditing ? 'Annuler' : 'Modifier'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName" className="text-canair-blue font-semibold">
                              Prénom
                            </Label>
                            <Input
                              id="firstName"
                              value={userData.firstName}
                              onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                              className="border-canair-blue/30 focus:border-canair-blue"
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName" className="text-canair-blue font-semibold">
                              Nom
                            </Label>
                            <Input
                              id="lastName"
                              value={userData.lastName}
                              onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                              className="border-canair-blue/30 focus:border-canair-blue"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-canair-blue font-semibold">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={userData.email}
                            onChange={(e) => setUserData({...userData, email: e.target.value})}
                            className="border-canair-blue/30 focus:border-canair-blue"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-canair-blue font-semibold">
                            Téléphone
                          </Label>
                          <Input
                            id="phone"
                            value={userData.phone}
                            onChange={(e) => setUserData({...userData, phone: e.target.value})}
                            className="border-canair-blue/30 focus:border-canair-blue"
                          />
                        </div>

                        <Button onClick={handleSaveProfile} className="bg-canair-red hover:bg-canair-red/90 text-white">
                          Sauvegarder les modifications
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm text-gray-600">Prénom</Label>
                            <p className="font-semibold">{userData.firstName}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-600">Nom</Label>
                            <p className="font-semibold">{userData.lastName}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm text-gray-600">Email</Label>
                            <p className="font-semibold flex items-center gap-2">
                              <Mail className="w-4 h-4 text-canair-blue" />
                              {userData.email}
                            </p>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-600">Téléphone</Label>
                            <p className="font-semibold flex items-center gap-2">
                              <Phone className="w-4 h-4 text-canair-blue" />
                              {userData.phone}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label className="text-sm text-gray-600">Date de naissance</Label>
                            <p className="font-semibold">{new Date(userData.dateOfBirth).toLocaleDateString('fr-FR')}</p>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-600">Nationalité</Label>
                            <p className="font-semibold">{userData.nationality}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
