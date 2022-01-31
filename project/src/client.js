import { createClient } from '@supabase/supabase-js';

// creating a new client takes two arguments:
// 1. the URL of the database
// 2. the API key
// you can get both of them from the supabase dashboard by clicking the API key button
const supabaseClient = createClient('https://mvsayxxgkiutyncrvevg.supabase.co' , 
                                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY0ODMwOCwiZXhwIjoxOTU5MjI0MzA4fQ.Nq7_8LDDASZhZi2LIL4zIlkbAa6YTuEIroRtwmBEPZ0' );

export{
    supabaseClient
}