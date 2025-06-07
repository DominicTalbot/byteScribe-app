"use server";

import { unstable_cache } from "next/cache";

export async function getPixabayImage(query) {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&min_width=1280&min_height=720&image_type=illustration&category=feelings`
    );
    const data = await res.json();
    if (data.hits && data.hits.length > 0) {
      return data.hits[0].largeImageURL;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching Pixabay image:", error);
    return null;
  }
}

export const getDailyPrompt = unstable_cache(
  async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-store",
      });
      const data = await res.json();
      return data.slip.advice;
    } catch (error) {
      return {
        success: false,
        data: "Whats on your mind today? 🤔",
      };
    }
  },
  ["daily-prompt"],
  {
    revalidate: 86400, // 24 hours
  }
);
