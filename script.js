// Verificação adicional para alertar caso o navegador não suporte Service Workers
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then(() => console.log("Service Worker registrado com sucesso"))
        .catch(err => console.error("Erro ao registrar Service Worker:", err));
} else {
    console.warn("Service Worker não é suportado neste navegador.");
}

    document.getElementById("salvar-contato").addEventListener("click", function () {
        const vCardData = `
                BEGIN:VCARD
                VERSION:3.0
                FN:Fernando Lima
                ORG:Vórtice
                TITLE:CEO
                TEL;TYPE=work,voice;VALUE=uri:tel:+5532991144887
                EMAIL:fernandoaslima@hotmail.com
                URL:https://vorticehub.com.br/
                ADR:;;Juiz de Fora-MG;;;;
                END:VCARD
                        `;

        const blob = new Blob([vCardData], { type: "text/vcard" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Fernando_Lima.vcf";
        link.click();
    });


document.getElementById("compartilhar-contato").addEventListener("click", () => {
    const contact = {
        name: "Fernando Lima",
        tel: "+5532991144887",
        email: "fernandoaslima@hotmail.com",
        address: "Juiz de Fora-MG",
        organization: "Vórtice",
        note: "CEO"
    };

    if (window.navigator.canShare && window.navigator.share) {
        navigator.share({
            title: contact.name,
            text: `Nome: ${contact.name}\nOrganização: ${contact.organization}\nTelefone: ${contact.tel}\nEmail: ${contact.email}\nEndereço: ${contact.address}`,
        })
            .then(() => console.log("Contato compartilhado com sucesso"))
            .catch(err => console.error("Erro ao compartilhar contato:", err));
    } else {
        alert("Este dispositivo não suporta o recurso de compartilhamento!");
    }
});
