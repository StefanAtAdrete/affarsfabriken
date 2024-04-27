<?php

namespace Drupal\commerce_payment\Plugin\Commerce\PaymentGateway;

use Drupal\commerce_payment\Entity\PaymentInterface;

/**
 * Defines the interface for gateways which support voiding payments.
 *
 * Payments can usually only be voided before they are captured/received.
 */
interface SupportsVoidsInterface {

  /**
   * Checks whether the given payment can be voided.
   *
   * @param \Drupal\commerce_payment\Entity\PaymentInterface $payment
   *   The payment to void.
   *
   * @return bool
   *   TRUE if the payment can be voided, FALSE otherwise.
   */
  public function canVoidPayment(PaymentInterface $payment);

  /**
   * Voids the given payment.
   *
   * @param \Drupal\commerce_payment\Entity\PaymentInterface $payment
   *   The payment to void.
   *
   * @throws \Drupal\commerce_payment\Exception\PaymentGatewayException
   *   Thrown when the transaction fails for any reason.
   */
  public function voidPayment(PaymentInterface $payment);

}
