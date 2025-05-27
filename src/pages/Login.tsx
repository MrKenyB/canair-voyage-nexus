
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plane, Mail, Lock, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!credentials.email || !credentials.password) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulation de la connexion
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Connexion réussie ! Bienvenue sur CANAIR CONGO');
      
      // Redirection vers l'accueil ou la page précédente
      console.log('Utilisateur connecté:', credentials.email);
      
    } catch (error) {
      toast.error('Email ou mot de passe incorrect');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-canair-blue via-canair-navy to-canair-blue-light flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-canair-red to-canair-gold rounded-full flex items-center justify-center">
              <Plane className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">CANAIR CONGO</h1>
          <p className="text-white/80">Connectez-vous à votre compte</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-canair-blue">Connexion</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-canair-blue font-semibold">
                  Adresse email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({...credentials, email: e.target.value})}
                    className="pl-10 border-canair-blue/30 focus:border-canair-blue"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-canair-blue font-semibold">
                  Mot de passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    className="pl-10 border-canair-blue/30 focus:border-canair-blue"
                    placeholder="Votre mot de passe"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <a href="#" className="text-canair-blue hover:text-canair-red transition-colors">
                  Mot de passe oublié ?
                </a>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-canair-red hover:bg-canair-red/90 text-white py-3 text-lg font-semibold"
              >
                {isLoading ? 'Connexion...' : 'Se connecter'}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Pas encore de compte ?{' '}
                <a href="#" className="text-canair-blue hover:text-canair-red transition-colors font-semibold">
                  Créer un compte
                </a>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <Button variant="ghost" className="text-white hover:text-canair-gold">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
