// MedicineReminder.jsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MedicineReminder() {
  const [medicineName, setMedicineName] = useState("");
  const [time, setTime] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (medicineName && time) {
      setSaved(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f3d] via-[#1c1c63] to-[#0f0f3d] text-white p-4">
      <Card className="bg-[#1a1a40] border-2 border-[#00f2ff] shadow-[0_0_20px_#00f2ff] rounded-2xl p-6 max-w-md w-full">
        <CardContent className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-center text-[#00f2ff]">CyberCare Reminder</h2>
          <div className="flex flex-col gap-2">
            <Label htmlFor="medicine">Medicine Name</Label>
            <Input
              id="medicine"
              placeholder="Enter Medicine Name"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="bg-[#0f0f3d] text-white border-[#00f2ff] focus:ring-[#00f2ff]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="time">Reminder Time</Label>
            <Input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-[#0f0f3d] text-white border-[#00f2ff] focus:ring-[#00f2ff]"
            />
          </div>
          <Button
            onClick={handleSave}
            className="bg-[#00f2ff] hover:bg-[#00d1cc] text-[#0f0f3d] font-bold mt-4"
          >
            Save Reminder
          </Button>
          {saved && (
            <div className="text-center mt-4 text-green-400">
              Reminder set for <span className="font-bold">{medicineName}</span> at <span className="font-bold">{time}</span> ✅
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}