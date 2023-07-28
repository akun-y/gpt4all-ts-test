
import { GPT4All } from "gpt4all-ts-client"
const test= async  () => {


  // Instantiate GPT4All with default or custom settings
  
  const gpt4all = new GPT4All("gpt4all-lora-quantized");
  //const gpt4all = new GPT4All("gpt4all-lora-unfiltered-quantized"); // Default is 'gpt4all-lora-quantized' model
  //const gpt4all = new GPT4All("ggml-mpt-7b-chat")

  // Initialize and download missing files
  const forceDownload = true
  await gpt4all.init(forceDownload)

  // Open the connection with the model
  await gpt4all.open()
  // Generate a response using a prompt
  const prompt = "Tell me about how Open Access to AI is going to help humanity."
  const response = await gpt4all.prompt(prompt)
  console.log(`Prompt: ${prompt}`)
  console.log(`Response: ${response}`)

  // Close the connection when you're done
  gpt4all.close()
}

test()