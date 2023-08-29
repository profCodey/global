import emailjs from "@emailjs/browser";

export default function sendEmail(body) {
  emailjs
    .sendForm("service_u9tfxf9", "template_tp6eg8r", body, "4hcX6fhJ6Smo5eG6u")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}
