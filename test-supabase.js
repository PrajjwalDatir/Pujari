const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Manually parse .env.local
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) env[key.trim()] = value.trim();
});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkConnection() {
  console.log(`Checking connection to: ${supabaseUrl}`);

  try {
    const { data, error } = await supabase
      .from('waitlist')
      .select('*')
      .limit(1);

    if (error) {
      if (error.code === '42P01') {
        console.log('✅ App -> Supabase Connection: SUCCESS');
        console.log('❌ Database Schema: FAILED (Table "waitlist" does not exist yet).');
        console.log('👉 ACTION REQUIRED: Go to your Supabase SQL Editor and run the migration in `supabase/migrations/20251224_create_waitlist.sql`.');
      } else {
        console.error('❌ Connection failed:', error.message);
      }
    } else {
      console.log('✅ App -> Supabase Connection: SUCCESS');
      console.log('✅ Database Schema: SUCCESS (Table "waitlist" is ready).');
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err.message);
  }
}

checkConnection();
