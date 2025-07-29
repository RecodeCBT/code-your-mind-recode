// api/recode-chat.ts
export default async function handler(req: Request) {
  const { message } = await req.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "You are a RECODE CBT assistant. Speak supportively using simplified DBT/CBT and neuroscience-based analogies to help reframe thought patterns.",
        },
        { role: "user", content: message },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
    headers: { "Content-Type": "application/json" },
  });
}

