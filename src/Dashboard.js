import React from 'react';
import { Card, CardContent } from './Card'; // Adjust the path if necessary
import { Progress } from './Progress'; // Ensure this path is correct
import { CreditCard, Banknote, Home } from 'lucide-react';
import './dash.css';

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="bg-teal-500 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src="/api/placeholder/32/32" alt="AuditEase logo" className="mr-2" />
              <h1 className="text-2xl font-bold">AuditEase</h1>
            </div>
            <h2 className="text-xl">DevJams</h2>
          </div>
          <div className="mt-4">
            <p className="text-lg">Hi Hitanshi Arora</p>
            <p className="text-sm">you are logged in as a coordinator</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-3 gap-4">
          {['PURCHASE', 'FINANCE', 'VERIFY'].map((action, index) => (
            <Card key={index} className="bg-white text-black">
              <CardContent className="flex flex-col items-center justify-center p-6">
                {index === 0 && <CreditCard className="w-8 h-8 mb-2 text-teal-500" />}
                {index === 1 && <Banknote className="w-8 h-8 mb-2 text-teal-500" />}
                {index === 2 && <Home className="w-8 h-8 mb-2 text-teal-500" />}
                <span className="font-semibold">{action}</span>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          <Card className="bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl mb-4">Count</h3>
              <div className="flex items-center">
                <Progress value={66} className="w-24 mr-4" />
                <span>66%</span>
              </div>
              <p className="mt-2 text-sm">1200/1800</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl mb-4">Wallet Amount</h3>
              <div className="flex items-center">
                <span className="text-3xl mr-2">₹</span>
                <span className="text-3xl">75000</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
