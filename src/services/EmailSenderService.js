import emailjs from 'emailjs-com';

export const sendMessageToMe = async(formData) => {
    try {
        await emailjs.send(
          'service_qmfinbg', 
          'template_k43uqhc', 
          {
            name: formData.name,  
            email: formData.email,  
            message: formData.message 
          },
          '-B1TI7uNNZHCwUPRA'
        );

      } catch (error) {
        alert('Failed to send message.');
      }    
};