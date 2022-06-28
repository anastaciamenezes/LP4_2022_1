import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAjKQ3_jhqrRKyPhn3ulbnF1n6uJD2m-lM",
  authDomain: "tarefa-autenticacao-react.firebaseapp.com",
  projectId: "tarefa-autenticacao-react",
  storageBucket: "tarefa-autenticacao-react.appspot.com",
  messagingSenderId: "571148508990",
  appId: "1:571148508990:web:9bd6585b638450549b966f"
};

const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp