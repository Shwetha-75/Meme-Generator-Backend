import supabase from "./SupabaseClient";

async function selectUserByEmail(email){
    try{

        const {data,error}=await supabase.from('user').select("email","password").eq('email',email);
        if(error){
            return {
                "status":'no'
            }
        }
        if (data){
            return{
                "status":"yes",
                "data":data[0]
            }
        }
    }catch(error){

        console.log("Something went wrong in selecting user data by their email ",error);
    }

}

export default selectUserByEmail;