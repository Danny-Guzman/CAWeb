/* CAWeb Google Analytics */
var _gaq = _gaq || [];

if("" !== args.ca_google_analytic_id){
	_gaq.push(['_setAccount', args.ca_google_analytic_id]); // Step 4: your google analytics profile code, either from your own google account, or contact eServices to have one set up for you
	_gaq.push(['_gat._anonymizeIp']);
	_gaq.push(['_setDomainName', '.ca.gov']);
	_gaq.push(['_trackPageview']);
}
	
_gaq.push(['b._setAccount', 'UA-3419582-2']); // statewide analytics - do not remove or change
_gaq.push(['b._setDomainName', '.ca.gov']);
_gaq.push(['b._trackPageview']);

if("" !== args.caweb_multi_ga){
	_gaq.push(['b._setAccount', args.caweb_multi_ga]); // CAWeb Multisite analytics - do not remove or change
	_gaq.push(['b._setDomainName', '.ca.gov']);
	_gaq.push(['b._trackPageview']);
}

(function() {
	var ga = document.createElement('script');
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' :
		'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();