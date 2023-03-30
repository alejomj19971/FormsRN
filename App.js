
import { StyleSheet,Text, View ,TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper'
import{useForm,Controller} from 'react-hook-form'
export default function App() {


  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullname: '',
      email:'',
      phone:'',
      age:'',
      password:''
    }
  });

  const onSubmit = data => console.log(data);
  return (
    <View style={styles.container}>
     <View>
      <Controller
        control={control}
        rules={{
         required: true,
         minLength:2,
         maxLength:30,
         pattern:/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
         
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label='Ingresa tu nombre completo'
            mode='outlined'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullname"
      />
      {errors.fullname?.type ==='required' && <Text style={{color:'red'}}>El nombre de usuario es requerido</Text>}
      {errors.fullname?.type ==='maxLength' && <Text style={{color:'red'}}>El nombre debe tener máximo 30 caracteres</Text>}
      {errors.fullname?.type ==='minLength' && <Text style={{color:'red'}}>El nombre debe tener mínimo 2 caracteres</Text>}
      {errors.fullname?.type ==='pattern' && <Text style={{color:'red'}}>El nombre debe tener solo letras y/o espacios</Text>}

      <Controller
        control={control}
        rules={{
         required:true,
         maxLength: 15,
         minLength:8,
         pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/
        
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label='Ingresa una Contraseña'
            mode='outlined'
            secureTextEntry={true}
            left={<TextInput.Icon icon="account-key" />}
           
          />
        )}
        name="password"
      />
      {errors.password?.type.required ==='required' && <Text style={{color:'red'}}>Este campo es obligatorio</Text>}
      {errors.password?.type ==='maxLength' && <Text style={{color:'red'}}>La contraseña debe tener máximo 15 caracteres</Text>}
      {errors.password?.type ==='pattern' && <Text style={{color:'red'}}>La contraseña debe tener por lo menos una mayuscula ,minuscula,y caracter especial</Text>}
      {errors.password?.type ==='minLength' && <Text style={{color:'red'}}>La contraseña debe tener mínimo 8 caracteres</Text>}


      
      <TouchableOpacity style={{backgroundColor:'green',padding:10,borderRadius:10,marginTop:10}} title="Submit" onPress={handleSubmit(onSubmit)} >
        <Text style={{color:'white',fontWeight:'bold',textAlign:'center'}}>Enviar</Text>
      </TouchableOpacity>
    </View>

      



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
