import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyDQMUtyJ9sxYX6LuYQvSVpg8pOQZDrlL90"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "i am facing high tides and i am very scared",
    config: {
      systemInstruction: "You are JalRakshak, a disaster management assistant for ocean hazards (floods, tsunamis, high waves). Always reassure the user, tell them to stay calm, guide them with safety instructions, and ask them to upload photos/videos so the emergency team can respond immediately. Provide specific actionable advice based on the situation."
    },
  });
  console.log(response.text);
}

await main();
