import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd-UldoY4BUpI62r7detWp-u5fDbgldhw",
  authDomain: "discord-clone-eb0d1.firebaseapp.com",
  projectId: "discord-clone-eb0d1",
  storageBucket: "discord-clone-eb0d1.appspot.com",
  messagingSenderId: "919974379075",
  appId: "1:919974379075:web:8aaf7c926194d0f839def6"
};

const app = initializeApp(firebaseConfig);
// 파이어베이스의 데이터베이스를 가져옵니다.
const db = getFirestore(app);
// 파이어베이스의 인증을 가져옵니다.
const auth = getAuth(app);
// 구글 로그인을 위한 provider를 만듭니다.
const provider = new GoogleAuthProvider();

export { auth, provider, db };