import React, { useState } from "react";
import { View, Text, Button, Alert, ActivityIndicator } from "react-native";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import axios from "axios";

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { confirmPayment } = useStripe();

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Step 1: Create payment intent on the backend
      const {
        data: { clientSecret },
      } = await axios.post(
        "http://192.168.1.159:8080/api/payment/create-payment-intent",
        {
          // Replace with your backend IP
          amount: 1000, // The amount in the smallest unit of the currency (e.g., 1000 for $10)
          description: "Booking Futsal Court",
        }
      );

      // Step 2: Confirm payment with Stripe
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        paymentMethodType: "Card", // This property tells Stripe to use the card details
        paymentMethodData: {
          billingDetails: {
            name: "John Doe", // User's name
          },
        },
      });

      if (error) {
        Alert.alert(`Payment failed: ${error.message}`);
      } else if (paymentIntent && paymentIntent.status === "Succeeded") {
        setPaymentSuccess(true);
        Alert.alert("Payment successful");
      }
    } catch (error) {
      Alert.alert("Payment not successful");
    }
    setLoading(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Enter your card details:
      </Text>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
      />
      <Button title="Pay" onPress={handlePayment} disabled={loading} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {paymentSuccess && (
        <Text style={{ marginTop: 20, color: "green" }}>
          Payment was successful!
        </Text>
      )}
    </View>
  );
}
