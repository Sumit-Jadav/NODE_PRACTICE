//! Normal validation of port
// const PORT = isNaN(process.env.PORT) ? 3000 : Number(process.env.PORT);
// console.log(PORT);

//! Validation using zod library

import z, { ZodError } from "zod";

const schema = z.number().min(20).max(100).int();
try {
  const userAge = 18;
  const parseAge = schema.parse(userAge);
} catch (error) {
  if (error instanceof ZodError) {
    console.log(error.issues[0].message);
  } else {
    console.log(`unexpected error`);
  }
}
