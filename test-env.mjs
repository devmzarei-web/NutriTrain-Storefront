import dotenv from 'dotenv';
import fs from 'fs';

const envConfig = dotenv.parse(fs.readFileSync('.env'));
console.log("Parsed DATABASE_URI:", envConfig.DATABASE_URI);
