function encryptString(input) {
  let encryptedText = "";
  let i = 0;

  while (i < input.length) {
    let char = input[i];

    if (char === "a") {
      encryptedText += "ai";
      i++;
    } else if (char === "e") {
      encryptedText += "enter";
      i++;
    } else if (char === "i") {
      encryptedText += "imes";
      i++;
    } else if (char === "o") {
      encryptedText += "ober";
      i++;
    } else if (char === "u") {
      encryptedText += "ufat";
      i++;
    } else {
      encryptedText += char;
      i++;
    }
  }
  return encryptedText;
}
function decryptString(input) {
  const decryptedText = input
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return decryptedText;
  i;
}

function handleEncrypt() {
  const inputElement = document.getElementById("inputText");
  const textToEncrypt = inputElement.value;
  const encryptedMessage = encryptString(textToEncrypt);

  const outputElement = document.getElementById("outputText");
  outputElement.innerText = encryptedMessage;
}

function handleDecrypt() {
  const inputElement = document.getElementById("inputText");
  const textToDecrypt = inputElement.value;
  const decryptedMessage = decryptString(textToDecrypt);

  const outputElement = document.getElementById("outputText");
  outputElement.innerText = decryptedMessage;
}

function copyToClipboard() {
  const outputElement = document.getElementById("outputText");
  outputElement.select();
  document.execCommand("copy");
  alert("Copied to clipboard: " + outputElement.value);
}

function toggleMessage() {
  const inputText = document.getElementById("inputText").value;
  const noMessageImage = document.querySelector(".right-panel img");
  const noMessageText = document.querySelector(".right-panel h2");

  if (inputText.trim() === "") {
    noMessageImage.style.display = "block";
    noMessageText.style.display = "block";
    outputText.style.height = "10px";
  } else {
    noMessageImage.style.display = "none";
    noMessageText.style.display = "none";
    outputText.style.height = "250px";
    outputText.style.weight = "80%";
  }
}
