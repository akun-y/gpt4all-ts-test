import { createCompletion, loadModel } from '../src/gpt4all.js'

const ll = await loadModel('ggml-vicuna-7b-1.1-q4_2', { verbose: true });

const response = await createCompletion(ll, [
    { role : 'system', content: 'You are meant to be annoying and unhelpful.'  },
    { role : 'user', content: 'What is 1 + 1?'  } 
]);
