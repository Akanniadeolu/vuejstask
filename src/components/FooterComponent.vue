<template>
  <div class="bottom">
    <div class="footer-text">
      <h1>Join our Team of Writers</h1>
      <p>On dasdas, writers earn a living doing what they love. <br>Getting started is easy. Just pay a one time $25 fee and everything is ready to go.
</p>
    </div>
    <div class="footer-btn">
      <flutterwave-pay-button
        :tx_ref="generateReference()"
        :amount=20
        currency='NGN'
        payment_options="card,ussd"
        redirect_url=""
        class="btn"
        style=""
        :meta="{counsumer_id: '7898' ,consumer_mac: 'kjs9s8ss7dd' }"
        :customer="{ name: 'Demo Customer  Name',
        email: 'customer@mail.com', 
        phone_number: '0818450****' }"
        :customizations="{  title: 'Customization Title' ,
        description: 'Customization Description'  ,
        logo : 'https://flutterwave.com/images/logo-colored.svg' }"
        :callback="makePaymentCallback"
        :onclose="closedPaymentModal"
    >   Join Us </flutterwave-pay-button>
    </div>
  </div>
</template>



<script>
import {FlutterwavePayButton} from "flutterwave-vue-v3"
export default {
  name: 'FooterComponent',
  components: {
        FlutterwavePayButton
  },

  methods: {
    makePaymentCallback(response) {
      console.log("Payment callback", response)
    },
    closedPaymentModal() {
      console.log('payment modal is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    }
  },
};
</script>

<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-text{
    text-align: center;
}

p {
    color: gray;
    font-size: medium;
}

.btn {
    cursor: pointer;
    border:none;
    width: 100px;
    height: 30px;
    padding: 20px, 15px, 20px, 15px;
    background-color: #000;
    color:#fff;
    display: grid;
    place-content: center;
    text-decoration: none;
}

.footer-btn{ 
    display: grid;
    place-content: center;
}

</style>
