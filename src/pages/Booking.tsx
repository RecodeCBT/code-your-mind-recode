import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, User, Video, MapPin } from "lucide-react";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [sessionType, setSessionType] = useState<string>("");

  // Mock available time slots
  const timeSlots = [
    "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const sessionTypes = [
    { id: "anxiety", name: "Anxiety Management", duration: "60 min", price: "£89" },
    { id: "depression", name: "Depression Support", duration: "60 min", price: "£89" },
    { id: "emergency", name: "Emergency Session", duration: "45 min", price: "£119" },
    { id: "refresher", name: "Refresher Session", duration: "45 min", price: "£69" }
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime && sessionType) {
      // TODO: Implement booking logic with Supabase
      console.log("Booking:", { date: selectedDate, time: selectedTime, type: sessionType });
      alert("Booking confirmed! You will receive a confirmation email shortly.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/account" className="inline-flex items-center gap-2 mb-8 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Back to Account
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Book Your Session</h1>
            <p className="text-muted-foreground">Choose your preferred date, time, and session type</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Session Type Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Session Type</CardTitle>
                <CardDescription>Select the type of session you need</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {sessionTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      sessionType === type.id 
                        ? "border-primary bg-primary/5" 
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSessionType(type.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium">{type.name}</h3>
                      <Badge variant="outline">{type.price}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {type.duration}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Date Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Date</CardTitle>
                <CardDescription>Choose your preferred appointment date</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                  className="rounded-md border"
                />
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>• Sessions available Monday - Friday</p>
                  <p>• Weekend appointments by special request</p>
                </div>
              </CardContent>
            </Card>

            {/* Time Selection & Booking */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Times</CardTitle>
                  <CardDescription>
                    {selectedDate ? `Available slots for ${selectedDate.toDateString()}` : "Select a date to view times"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="justify-center"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-8">
                      Please select a date first
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Session Details */}
              {sessionType && selectedDate && selectedTime && (
                <Card>
                  <CardHeader>
                    <CardTitle>Session Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Dr. Christopher Carson</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Online Video Session</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {selectedDate.toDateString()} at {selectedTime}
                        </span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium">Total</span>
                        <span className="font-bold text-lg">
                          {sessionTypes.find(t => t.id === sessionType)?.price}
                        </span>
                      </div>
                      
                      <Button 
                        onClick={handleBooking} 
                        className="w-full"
                        disabled={!sessionType || !selectedDate || !selectedTime}
                      >
                        Confirm Booking
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;