// const API_KEY = "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";

// const askGPT = async (question) => {
//     try {
//         const params = {
//             prompt: question,
//             max_tokens: 60,
//             n: 1,
//             stop: "\n",
//         };
//         const apiHeaders = {
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${openaiApiKey}`,
//             },
//         };
//         let response = await fetch(
//             "https://api.openai.com/v1/engines/davinci-codex/completions",
//             params,
//             headers
//         );

//         return response.data.choices[0].text.trim();

//     } catch (error) {
//         console.error(error)
//     }
// };


// Escucha el evento de selección del usuario
document.addEventListener('mouseup', () => {
    // Obtiene el objeto Selection actual
    const selection = window.getSelection();
    
    // Verifica si hay un texto seleccionado
    if (selection.toString().length > 0) {
      // El usuario ha seleccionado texto, así que haz algo con él
      const selectedText = selection.toString();
      console.log(selectedText);
    }
  });
  