
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, Clock, MapPin, Users, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const navigate = useNavigate();
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

  // Données de vols fictives
  const flights = [
    {
      id: 'CA101',
      departure: 'Kinshasa',
      arrival: 'Lubumbashi',
      departureTime: '08:30',
      arrivalTime: '11:45',
      duration: '3h 15min',
      price: 85000,
      aircraft: 'Boeing 737',
      availableSeats: 23
    },
    {
      id: 'CA205',
      departure: 'Kinshasa',
      arrival: 'Lubumbashi',
      departureTime: '14:20',
      arrivalTime: '17:35',
      duration: '3h 15min',
      price: 92000,
      aircraft: 'Airbus A320',
      availableSeats: 8
    },
    {
      id: 'CA309',
      departure: 'Kinshasa',
      arrival: 'Lubumbashi',
      departureTime: '19:45',
      arrivalTime: '23:00',
      duration: '3h 15min',
      price: 78000,
      aircraft: 'Boeing 737',
      availableSeats: 45
    }
  ];

  const handleSelectFlight = (flightId: string) => {
    setSelectedFlight(flightId);
    toast.success('Vol sélectionné ! Procédez à la réservation.');
  };

  const handleBooking = () => {
    if (!selectedFlight) {
      toast.error('Veuillez sélectionner un vol avant de continuer');
      return;
    }
    navigate('/booking');
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
              <Button variant="ghost" className="text-canair-blue" onClick={() => navigate('/')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-canair-blue">CANAIR CONGO</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Summary */}
        <Card className="mb-8 border-canair-blue/20">
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-canair-blue" />
                <span className="font-semibold">Kinshasa → Lubumbashi</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-canair-blue" />
                <span>27 mai 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-canair-blue" />
                <span>1 passager</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Flight Results */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-canair-blue mb-6">
              Vols disponibles ({flights.length})
            </h2>

            <div className="space-y-4">
              {flights.map((flight) => (
                <Card key={flight.id} className={`transition-all hover:shadow-lg ${
                  selectedFlight === flight.id ? 'ring-2 ring-canair-blue bg-canair-blue/5' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      {/* Flight Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <Badge variant="secondary" className="bg-canair-blue text-white">
                            {flight.id}
                          </Badge>
                          <span className="text-sm text-gray-600">{flight.aircraft}</span>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-canair-blue">{flight.departureTime}</div>
                            <div className="text-sm text-gray-600">{flight.departure}</div>
                          </div>

                          <div className="flex-1 text-center">
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-1">
                              <div className="w-2 h-2 bg-canair-blue rounded-full"></div>
                              <div className="flex-1 h-px bg-gray-300"></div>
                              <Plane className="w-4 h-4 text-canair-blue" />
                              <div className="flex-1 h-px bg-gray-300"></div>
                              <div className="w-2 h-2 bg-canair-blue rounded-full"></div>
                            </div>
                            <div className="text-sm text-gray-600">{flight.duration}</div>
                          </div>

                          <div className="text-center">
                            <div className="text-2xl font-bold text-canair-blue">{flight.arrivalTime}</div>
                            <div className="text-sm text-gray-600">{flight.arrival}</div>
                          </div>
                        </div>

                        <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
                          <span>{flight.availableSeats} places disponibles</span>
                        </div>
                      </div>

                      {/* Price and Action */}
                      <div className="text-center md:text-right">
                        <div className="text-3xl font-bold text-canair-red mb-2">
                          {formatPrice(flight.price)}
                        </div>
                        <Button 
                          onClick={() => handleSelectFlight(flight.id)}
                          className={`w-full md:w-auto ${
                            selectedFlight === flight.id 
                              ? 'bg-green-600 hover:bg-green-700' 
                              : 'bg-canair-red hover:bg-canair-red/90'
                          } text-white`}
                        >
                          {selectedFlight === flight.id ? 'Sélectionné' : 'Sélectionner'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-canair-blue/20">
              <CardHeader>
                <CardTitle className="text-canair-blue">Résumé de la réservation</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedFlight ? (
                  <div className="space-y-4">
                    {(() => {
                      const flight = flights.find(f => f.id === selectedFlight);
                      return flight ? (
                        <>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Vol</span>
                              <span className="font-semibold">{flight.id}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Route</span>
                              <span className="font-semibold">{flight.departure} → {flight.arrival}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Départ</span>
                              <span className="font-semibold">{flight.departureTime}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Arrivée</span>
                              <span className="font-semibold">{flight.arrivalTime}</span>
                            </div>
                          </div>

                          <div className="border-t pt-4">
                            <div className="flex justify-between text-lg font-bold">
                              <span>Total</span>
                              <span className="text-canair-red">{formatPrice(flight.price)}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Paiement sur place uniquement
                            </p>
                          </div>

                          <Button 
                            className="w-full bg-canair-blue hover:bg-canair-blue/90 text-white"
                            onClick={handleBooking}
                          >
                            Continuer la réservation
                          </Button>
                        </>
                      ) : null;
                    })()}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <Plane className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Sélectionnez un vol pour voir le résumé</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
