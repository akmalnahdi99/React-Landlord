const prod = {
  apiUrl: "https://api.tartil.online/api",
};

export const config = process.env.NODE_ENV === "development" ? prod : prod;