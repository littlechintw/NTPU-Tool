<template>
  <div class="home">
    
  </div>
</template>

<script>
export default {
  methods: {},
  created: function () {
    var isiOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false );
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

    if (isiOS) window.location.href = 'https://apps.apple.com/us/app/taiwan-social-distancing/id1554431836';
    else if (isAndroid) window.location.href = 'https://play.google.com/store/apps/details?id=tw.gov.cdc.exposurenotifications';
    else window.location.href = 'https://www.cdc.gov.tw/Category/Page/R8bAd_yiVi22CIr73qM2yw'
  }
};
</script>

<style>
.home {
  margin-left: 20pt;
  margin-right: 20pt;
}
</style>