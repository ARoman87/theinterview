import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TestFeatureBaseComponent } from '@theinterview/xplat/features';
import { EventData, ItemEventData, ListView } from '@nativescript/core';


@Component({
  selector: 'theinterview-test-feature',
  templateUrl: 'test-feature.component.html',
})
export class TestFeatureComponent extends TestFeatureBaseComponent {
  // Objective: Take the policyData array and display it in a NativeScript ListView.

  // Your list only needs to display the label of each object in the array.
  // When an item is tapped in your list, it should console log the label string.
  // Your list should be scrollable and should include all of the objects in the policyData array.
  // Your list should work well on both iOS and Android.

  policyData = [
    { label: 'Policy Pol Eff Date Day', key: 'policy.pol_eff_date.day' },
    { label: 'Policy Pol Eff Date Month', key: 'policy.pol_eff_date.month' },
    { label: 'Policy Pol Eff Date Year', key: 'policy.pol_eff_date.year' },
    { label: 'Policy Pol Eff Date Date', key: 'policy.pol_eff_date.date' },
    { label: 'Policy Pol Exp Date Day', key: 'policy.pol_exp_date.day' },
    { label: 'Policy Pol Exp Date Month', key: 'policy.pol_exp_date.month' },
    { label: 'Policy Pol Exp Date Year', key: 'policy.pol_exp_date.year' },
    { label: 'Policy Pol Exp Date Date', key: 'policy.pol_exp_date.date' },
    { label: 'Policy Policy Number', key: 'policy.policy_number' },
    { label: 'Policy Binder Number', key: 'policy.binder_number' },
    { label: 'Policy Status', key: 'policy.status' },
    { label: 'Policy Renewal Count', key: 'policy.renewal_count' },
    { label: 'Policy Pol Bind Date Day', key: 'policy.pol_bind_date.day' },
    { label: 'Policy Pol Bind Date Month', key: 'policy.pol_bind_date.month' },
    { label: 'Policy Pol Bind Date Year', key: 'policy.pol_bind_date.year' },
    { label: 'Policy Pol Bind Date Date', key: 'policy.pol_bind_date.date' },
    { label: 'Policy Cancelation Eff Date Date', key: 'policy.cancelation_eff_date.date' },
    { label: 'Policy Cancelation Eff Date Year', key: 'policy.cancelation_eff_date.year' },
    { label: 'Policy Cancelation Eff Date Month', key: 'policy.cancelation_eff_date.month' },
    { label: 'Policy Cancelation Eff Date Day', key: 'policy.cancelation_eff_date.day' },
    { label: 'Policy Pol Termination Date Date', key: 'policy.pol_termination_date.date' },
    { label: 'Policy Pol Termination Date Year', key: 'policy.pol_termination_date.year' },
    { label: 'Policy Pol Termination Date Month', key: 'policy.pol_termination_date.month' },
    { label: 'Policy Pol Termination Date Day', key: 'policy.pol_termination_date.day' },
    { label: 'Status', key: 'status' },
    { label: 'Quote Status', key: 'quote_status' },
    { label: 'Premium Quote Pure Premium Per Unit', key: 'premium.quote_pure_premium_per_unit' },
    { label: 'Premium Quote Pure Premium', key: 'premium.quote_pure_premium' },
    { label: 'Premium Quote Coverage Premiums', key: 'premium.quote_coverage_premiums' },
    { label: 'Premium Quote Coverage Total Premium', key: 'premium.quote_coverage_total_premium' },
    { label: 'Premium Total Fees', key: 'premium.total_fees' },
    { label: 'Premium Total Earned Premium', key: 'premium.total_earned_premium' },
    { label: 'Premium Total Taxable Premium', key: 'premium.total_taxable_premium' },
    { label: 'Premium Total Taxes', key: 'premium.total_taxes' },
    { label: 'Premium Total Premium Per Unit', key: 'premium.total_premium_per_unit' },
    { label: 'Premium Total Premium', key: 'premium.total_premium' },
    { label: 'Dot Census', key: 'dot.census' },
    { label: 'Dot Dot Number', key: 'dot.dot_number' },
    { label: 'Dot Mc Number', key: 'dot.mc_number' },
    { label: 'Dot Legal Name', key: 'dot.legal_name' },
    { label: 'Dot Tax ID', key: 'dot.tax_id' },
    { label: 'Dot Traveling', key: 'dot.traveling' },
    { label: 'Dot Dba Name', key: 'dot.dba_name' },
    { label: 'Dot Telephone', key: 'dot.telephone' },
    { label: 'Dot Number Of Employees', key: 'dot.number_of_employees' },
    { label: 'Dot Email Address', key: 'dot.email_address' },
    { label: 'Dot Radius', key: 'dot.radius' },
    { label: 'Dot Company Start Date Date', key: 'dot.company_start_date.date' },
    { label: 'Dot Company Start Date Year', key: 'dot.company_start_date.year' },
    { label: 'Dot Company Start Date Month', key: 'dot.company_start_date.month' },
    { label: 'Dot Company Start Date Day', key: 'dot.company_start_date.day' },
    { label: 'Dot Garage Address Street', key: 'dot.garage_address.street' },
    { label: 'Dot Garage Address Street 2', key: 'dot.garage_address.street_2' },
    { label: 'Dot Garage Address City', key: 'dot.garage_address.city' },
    { label: 'Dot Garage Address State', key: 'dot.garage_address.state' },
    { label: 'Dot Garage Address Code', key: 'dot.garage_address.code' },
    { label: 'Dot Garage Address Country', key: 'dot.garage_address.country' },
    { label: 'Dot Mailing Address Street', key: 'dot.mailing_address.street' },
    { label: 'Dot Mailing Address Street 2', key: 'dot.mailing_address.street_2' },
    { label: 'Dot Mailing Address City', key: 'dot.mailing_address.city' },
    { label: 'Dot Mailing Address State', key: 'dot.mailing_address.state' },
    { label: 'Dot Mailing Address Code', key: 'dot.mailing_address.code' },
    { label: 'Dot Mailing Address Country', key: 'dot.mailing_address.country' },
    { label: 'Dot Documents', key: 'dot.documents' },
    { label: 'Dot Data Speed Gauge Dot Score', key: 'dot.data.speed_gauge_dot_score' },
    { label: 'Transactions Transaction', key: 'transactions.transaction' },
    { label: 'Transactions Eff Date Date', key: 'transactions.eff_date.date' },
    { label: 'Transactions Eff Date Year', key: 'transactions.eff_date.year' },
    { label: 'Transactions Eff Date Month', key: 'transactions.eff_date.month' },
    { label: 'Transactions Eff Date Day', key: 'transactions.eff_date.day' },
    { label: 'Transactions Premium Quote Pure Premium Per Unit', key: 'transactions.premium.quote_pure_premium_per_unit' },
    { label: 'Transactions Premium Quote Pure Premium', key: 'transactions.premium.quote_pure_premium' },
    { label: 'Transactions Premium Quote Coverage Premiums', key: 'transactions.premium.quote_coverage_premiums' },
    { label: 'Transactions Premium Quote Coverage Total Premium', key: 'transactions.premium.quote_coverage_total_premium' },
    { label: 'Transactions Premium Total Fees', key: 'transactions.premium.total_fees' },
    { label: 'Transactions Premium Total Taxable Premium', key: 'transactions.premium.total_taxable_premium' },
    { label: 'Transactions Premium Total Taxes', key: 'transactions.premium.total_taxes' },
    { label: 'Transactions Premium Total Earned Premium', key: 'transactions.premium.total_earned_premium' },
    { label: 'Transactions Premium Total Premium Per Unit', key: 'transactions.premium.total_premium_per_unit' },
    { label: 'Transactions Premium Total Premium', key: 'transactions.premium.total_premium' },
    { label: 'Transactions Object ID', key: 'transactions.object_id' },
    { label: 'Transactions Created At', key: 'transactions.created_at' },
    { label: 'Transactions  ID', key: 'transactions._id' },
    { label: 'Changes', key: 'changes' },
    { label: 'Commision', key: 'commision' },
    { label: 'Net Payment', key: 'net_payment' },
    { label: 'Earned Premium', key: 'earned_premium' },
  ];


  constructor(_Store: Store) {
    super(_Store);
  }

  onItemTap(args: ItemEventData) {
    console.log(args)
  }
}
