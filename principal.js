

        document.getElementById('textBox1').focus();

        
        
        const letraA = "ai";
        const letraE = "enter";
        const letraI = "imes";
        const letraO = "ober";
        const letraU = "ufat";

        function encriptar() {
          

                const text = document.getElementById("textBox1").value;
                let textBoxElement = document.getElementById("textBox1");
                let textEncrypted = text;

                textEncrypted = textEncrypted.replace(/e/gi, letraE);
                textEncrypted = textEncrypted.replace(/i/gi, letraI);
                textEncrypted = textEncrypted.replace(/a/gi, letraA);
                textEncrypted = textEncrypted.replace(/o/gi, letraO);
                textEncrypted = textEncrypted.replace(/u/gi, letraU);

                textBoxElement.value = "";
                document.getElementById("textArea").value=textEncrypted;
            
                document.getElementById('img').style.display='none';
                document.getElementById('divTextArea').style.display="block";
                document.getElementById('divCopiar').style.display="block";
                document.getElementById('divH5').style.display="none";
        }

        
       

        function desencriptar() {
           
            
            const text = document.getElementById("textBox1").value;
            let textBoxElement = document.getElementById("textBox1");
            let textDecrypted = text;

            textDecrypted = textDecrypted.replace(/enter/gi, "e");
            textDecrypted = textDecrypted.replace(/imes/gi, "i");
            textDecrypted = textDecrypted.replace(/ai/gi, "a");
            textDecrypted = textDecrypted.replace(/ober/gi, "o");
            textDecrypted = textDecrypted.replace(/ufat/gi, "u");

            textBoxElement.value = "";
            document.getElementById("textArea").value=textDecrypted;
            
            document.getElementById('img').style.display='none';
            document.getElementById('divTextArea').style.display="block";
            document.getElementById('divCopiar').style.display="block";
            document.getElementById('divH5').style.display="none";
}


      
 

            
        function copiarTexto() {
           
        var content = document.getElementById('textArea');
        content.select();
        document.execCommand('copy');

        alert("Texto copiado");
         
                document.getElementById('img').style.display='block';
                document.getElementById('divTextArea').style.display="none";
                document.getElementById('divH5').style.display="block";
                document.getElementById('divCopiar').style.display="none";
        
        }     
    

   
    