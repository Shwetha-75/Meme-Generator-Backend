import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ACCESS_TOKEN;
const supabase=createClient(supabaseUrl,supabaseAnonKey);

(async()=>{
    try{
      await supabase.auth.signInWithPassword({
        "email":process.env.EMAIL,
        "password":process.env.PASSWORD
      })
    }catch(error){
        console.log(error);
    }
});

export default supabase;
