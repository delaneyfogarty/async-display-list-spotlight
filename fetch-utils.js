const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bnNjZXFwa25zbnZ5dnJtZXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NzEzOTksImV4cCI6MTk2MzU0NzM5OX0.0rQxsYTXfd8cbn-mlX01dpPccunID0HFXDu7koSZ5Ms'; //eslint-disable-line

const SUPABASE_URL = "https://lznsceqpknsnvyvrmexq.supabase.co" //eslint-disable-line

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY); //eslint-disable-line

export async function fetchAllGemstonez() {
  const data = await client
    .from('gemstonez')
    .select('*');

  return data.data;
}

export async function fetchAllAnimalz() {
  const data = await client
    .from('favorite_animalz')
    .select('*');

  return data.data;
}

export async function fetchAllSingerz() {
  const data = await client
    .from('favorite_singerz')
    .select('*');

  return data.data;
}

export async function fetchAllPlacez() {
  const data = await client
    .from('favorite_placez')
    .select('*');

  return data.data;
}