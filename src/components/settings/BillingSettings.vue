<template>
  <div class="billing-settings scrollable">
    <b-container fluid class="billing-form" >
        <b-row>
          <b-col cols="3">
            <h5>Billings History</h5>
          </b-col>
          <b-col class="align-right">
            <b-btn class="d-inline-flex align-items-center justify-content-center gap-3 btn-fit"> <b-icon-cloud-download/>Download All</b-btn>
          </b-col>
        </b-row>
        
      <div class="billing-list scrollable">
        <table class="tabletable-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Invited By</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(member, i) in members" :key="i">
              <td> {{member.item}} </td>
              <td>{{ member.balance }}</td>
              <td>{{ member.charges}}</td>
              <td>{{member.date}} </td>
              <td class="d-flex"> 
                <div class="billing-status" :class="member.status === 'paid' ? 'paid' :'pending'">
                  <b-icon-check2/> {{member.status}}
                </div> 
              </td>
              <td>
                <b-icon-cloud-download/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <b-row class="pb-5">
        <b-col cols="3"><b-btn class="btn-fit">View All</b-btn></b-col>
      </b-row>
      <b-row>
        <b-col>
          <h5>Settings</h5>
        </b-col>
        <b-col class="align-right">
          <b-btn class="btn-save"> Save</b-btn>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="3">
          <label for="">Company name and address</label>
        </b-col>
        <b-col class="d-flex flex-column gap-2">
            <b-form-input  class="account-input w-100" type="text" placeholder="Company Name*"></b-form-input>
            <div class="d-flex justify-content-between gap-2">
              <b-form-input  class="account-input w-50" type="text" placeholder="Street address*"></b-form-input>
              <b-form-input  class="account-input w-50" type="text" placeholder="Suite/unit*"></b-form-input>
            </div>
            <div class="d-flex justify-content-between gap-2">
              <b-form-input  class="account-input w-50" type="text" placeholder="City*"></b-form-input>
              <b-form-input  class="account-input w-50" type="text" placeholder="State/province/region*"></b-form-input>
            </div>
            <div class="d-flex justify-content-between gap-2">
              <b-form-input  class="account-input w-50" type="text" placeholder="Postal code"></b-form-input>
              <b-form-input  class="account-input w-50" type="text" placeholder="Country*"></b-form-input>
            </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="3">
          <label>Email Notifications</label>
          <p class="desc">Receive Notifications</p>
        </b-col>

        <b-col class="d-flex justify-content-end pt-3">
          <div class="d-flex flex-column gap-3">
            <b-form-radio v-model="selected"  name="notification-radios" value="yes">
              <p>Yes</p>
            </b-form-radio>
              <div class="d-flex flex-column pl-9 gap-3">
                <b-form-radio v-model="selected"  name="yes-radios" value="day">
                <p>As billing changes occur(most 1x per day)</p>
                </b-form-radio>

                <b-form-radio v-model="selected"  name="yes-radios" value="month">
                  <p>At the end of each month</p>
                </b-form-radio>
              </div>
            <b-form-radio v-model="selected"  name="notification-radios" value="no">
              <p>No</p>
            </b-form-radio>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="3">
          <label for="">Purchasing</label>
          <p class="desc">Who can purchase Sphyr</p>
        </b-col>
        <b-col class="d-flex justify-content-end gap-4">
          <b-form-radio v-model="selected"  name="purchase-radios" value="1">
              <label for="">Any User</label>
          </b-form-radio>
          <b-form-radio v-model="selected"  name="purchase-radios" value="2">
              <label for="">Admin and Owner</label>
          </b-form-radio>
          <b-form-radio v-model="selected"  name="purchase-radios" value="3">
              <label for="">Only Owner</label>
          </b-form-radio>
        </b-col>
    </b-row>

    <b-row>
      <b-col cols="3">
        <label for="">Billing Contact</label>
      </b-col>
      <b-col class="d-flex gap-3">
        <b-form-input type="text" placeholder="Name"></b-form-input>
        <b-form-input type="text" placeholder="Role"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3"></b-col>
      <b-col class="d-flex">
          <b-icon-plus /> <p class="desc">Add new billing contact</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3">
        <label for="">Payment Methods</label>
        <p class="desc">Select default payment method</p>
      </b-col>
      <b-col class="payment d-flex justify-content-between p-2">
        <div class="d-flex">
            <b-img
              class="pay-thumbnail"
              rounded
              :src="require('@/assets/images/visa.png')"
              alt="Left image"
            ></b-img>
          <div>
            <h5 class="fs-12">Visa ending in 1234</h5>
            <p class="desc">Expiry 06/2024</p>
            <b-link>Default</b-link>
          </div>          
        </div>
        <b-icon-three-dots-vertical/>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="3"/>
      <b-col class="payment d-flex justify-content-between p-2">
        <div class="d-flex">
            <b-img
              class="pay-thumbnail"
              rounded
              :src="require('@/assets/images/apple-pay.png')"
              alt="Left image"
            ></b-img>
          <div>
            <h5 class="fs-12">Visa ending in 1234</h5>
            <p class="desc">Expiry 06/2024</p>
            <b-link>Default</b-link>
          </div>          
        </div>
        <b-icon-three-dots-vertical/>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="3"></b-col>
      <b-col class="d-flex">
          <b-icon-plus /> <p class="desc">Add new billing contact</p>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name:'BillingSettings',
  data(){
    return{
      members:[
        { item:'INVOICE - 00234 ', balance:'$0', charges:'$500', date:'Dec. 1, 2022', status:'paid'},
        { item:'INVOICE - 00235 ', balance:'$0', charges:'$500', date:'Nov. 1, 2022', status:'paid'},
        { item:'INVOICE - 00236 ', balance:'$0', charges:'$500', date:'Oct. 1, 2022', status:'pending'},
        { item:'INVOICE - 00237 ', balance:'$0', charges:'$500', date:'Sept. 1, 2022', status:'paid'},
        { item:'INVOICE - 00238 ', balance:'$0', charges:'$500', date:'Aug. 1, 2022', status:'paid'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.billing-settings{ max-height: 77vh; }
  .billing-list{
    max-height: 77vh;
  }
  .bi-cloud-download{
    color:$gray;
    font-size: 18px;
  }
  .payment{background-color: #fff; padding: 15px 20px !important; height: 90px;}
  .pay-thumbnail{ width: 40px;height: 25px;  margin-right: 10px; border: 1px solid $light-gray; padding: 7px;}
</style>