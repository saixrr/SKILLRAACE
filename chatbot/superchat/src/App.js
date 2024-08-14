// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore, GoogleAuthProvider, signInWithPopup, signOut, collection, query, orderBy, limit, addDoc, serverTimestamp } from './firebase';

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1>Chat App</h1>
        {user && <SignOut />}
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <button className="btn btn-primary btn-lg" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="btn btn-danger" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messageRef = collection(firestore, 'messages');
  const q = query(messageRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    try {
      await addDoc(messageRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <div className="chat-messages mb-4">
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
      <form onSubmit={sendMessage} className="input-group">
        <input
          className="form-control"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass} mb-3 d-flex align-items-start`}>
      <img
        src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}
        className="rounded-circle me-2"
        alt="User Avatar"
        width="40"
        height="40"
      />
      <p className="bg-light p-3 rounded">{text}</p>
    </div>
  );
}

export default App;
