/**
 * Donation service - saves donations to Firestore.
 *
 * To send donation receipt emails automatically:
 * 1. Install Firebase Extension "Trigger Email from Firestore"
 *    https://extensions.dev/extensions/firebase/firestore-send-email
 * 2. Configure the extension to watch the 'donations' collection
 * 3. Use the document fields below in your email template
 *
 * Document structure:
 * - amount, currency, email, firstName, lastName, phone
 * - donationType, designation, anonymous, paymentMethod
 * - createdAt, receiptSent
 */

import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase/config'

const DONATIONS_COLLECTION = 'donations'

export async function submitDonation(donation) {
  if (!db) {
    console.warn('Firebase not configured. Donation not saved.')
    return { success: false, id: null }
  }

  try {
    const docRef = await addDoc(collection(db, DONATIONS_COLLECTION), {
      amount: Number(donation.amount),
      currency: 'NGN',
      email: donation.email,
      firstName: donation.firstName,
      lastName: donation.lastName,
      phone: donation.phone,
      donationType: donation.donationType,
      designation: donation.designation || '',
      anonymous: donation.anonymous,
      paymentMethod: donation.paymentMethod,
      createdAt: serverTimestamp(),
      receiptSent: false,
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error saving donation:', error)
    return { success: false, id: null }
  }
}
