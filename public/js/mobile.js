/* globals window */
/* globals Firebase */
/* globals console */
/* globals alert */


// global vars
var cal = [0, 0, 0];
var alpha = 0;
var beta = 0;
var gamma = 0;

// max values
var maxX = 0;
var maxY = 0;
var maxZ = 0;

var a = [0,0,0];

var bufferX = [];
var bufferY = [];
var bufferZ = [];

var modelData = {
  "axs" : [ -0.007626153775930288, -0.02755975044099614, -0.0022414850416767875, -0.1541582777882926, -0.17772274804804472, -0.170938366871234, 0.9670639939576386, 1.619330217093229, -1.2542306844018398, 1.8909787281490862, -1.996126032797247, -2.1840936594732105, -0.4865169676063582, -0.630180794186145, -3.8496851308733224, 0.7429020412199199, 0.4185867927290499, 0.5787138244623318, -5.250667780596017, -1.0815963090013712, -1.7058286431118845, -0.7126927078519016, -1.5103065094031394, 0.2651281145774759, -0.9770861332129687, 0.9285335530985146, -0.6160816147502511, 0.9612330958470702, -3.206497993989289, 1.2946224621534346, -1.886475279249996, -1.5934546020805835, -0.8760377152509987, 1.8342656379327178, 1.163137551004067, -0.7073368799071759, -0.9991296227168291, 0.20360022622421384, -1.4152213106945157, -2.811286962281167, 0.4345858144368976, -0.6563141102869063, -0.8522286773793399, -3.714498077270388, 0.16852673915224148, -1.0410447375781833, -1.3182675416350365, -1.3681066544286906, 1.0002871952541172, 4.531063174463808, 8.196112745693325, -2.193283220361918, -21.428920850956438, -15.2400814088881, -3.094777740691602, 0.39392563154008237, 1.342261580684781, 5.247368154528737, 9.313387759384513, -7.238696870046853, -17.766570894074437, -16.975446235346794, -10.142177255117893, -0.9221035931162536, 2.8356150555908677, 4.6167660661906, 4.787452010937034, 9.89022260169983, -15.234814866662024, -28.26506100270748, -14.33454944973588, -2.7612223701685665, 1.3193915772289038, 1.691247890704125, 3.7435023456975816, 4.695774136453867, 0.38007140330858524, -24.489659836184977, -25.76778241443634, -12.208921569365263, -3.1453406377151607, -0.17781342200618236, 1.5664413613401353, 1.7597746067024767, 1.411770293457806, 0.9777676857363432, 0.36728984580989926, -0.3245298045570031, -0.3078650124168023, -0.5790343251209705 ],
  "ays" : [ -0.05136560997487977, -0.08363252432667649, 0.16985139361843465, 0.2505126013835892, 0.4337767265437171, -1.85959253302142, -7.300295540347695, -8.473211777240037, 1.4642176890537142, 13.757412409603594, 4.071348398663103, 6.355412983059883, 8.341369942411779, -13.447518777436017, -10.355137284231185, -2.2171533407710493, -6.915314810752868, -7.06081926023066, 15.787567991644144, 7.200783611238002, 0.3940056745063513, 6.962464099940657, 5.94515401982367, -4.9150458329319955, -8.2492194819808, -4.5889574372887605, -7.327073072636127, -8.909288487821817, 12.445009960609674, 8.027069599717855, 2.5160747664168475, 5.287916438016295, 3.952314607481658, -7.885132487332821, -6.333516208550334, -4.05317093693763, -2.812181280772388, -5.910531619253755, -6.2699243186056615, 14.226484211814403, 5.414268443256616, 0.7771072392910718, 3.0605545685723423, 6.621018560689687, 0.5969612826840952, -11.260431927496194, -2.639576642923057, -0.21680813764249904, 0.42850897874124344, 4.237977469234168, 7.784507628545165, 7.201246552574634, 3.028536505281925, 2.7010665921524164, 7.771438888135552, 6.031767304393648, 6.393660003867745, 8.418978667271137, 12.170465874242781, 10.433070418739318, 0.6001619418889284, 0.37486123091224577, 6.195996328085661, 9.578384849727152, 7.678040473470092, 6.491614766663313, 7.2975821897357696, 13.93532567525506, 15.710822605615853, -3.426117188730836, 5.193099973246455, 9.205746884354948, 7.719013704371452, 6.300600611898303, 7.22027741625905, 9.716744103625416, 12.308736865335701, 1.1853702794697134, -2.233739587782323, 7.093218724054098, 8.952218698009847, 7.168285363215207, 4.989727856689691, 2.9276594252988692, 1.6248158088974654, -0.08541990093379281, -0.8164624405365437, -1.1382358225248754, -0.6961285996071994, -0.3277204903570935 ],
  "azs" : [ 0.05658635856416076, 0.15670447340607643, 0.10985305292000994, -0.07574408633152488, -0.6892288301561027, 0.217154686057847, -0.19298269662531092, 2.405349223244935, 4.776486964808404, -5.76988103954792, 2.554933197121322, 0.42499563685804603, -1.0085346529871224, 2.325361202033609, -2.2755903321705757, -2.7233213863193986, 0.09293593911970965, 1.3781471330583095, 3.995913218450546, -4.926702368456125, 2.832354592490196, -0.9138060126312076, 1.145719529343769, 5.51704141998887, 1.215428221668303, -2.9791508353441953, -1.454651257676631, 2.7494655891403554, 3.564003564420342, -2.619641523875296, 2.458090779481828, -2.472080141867697, 0.3633654754403978, 5.229360204151273, -1.1235281558018178, -3.8092385541945695, -0.7590468280740081, 1.1050484962593763, 1.7607966432265936, 4.909306412497163, -2.0334866261594, 0.4240280704675242, 0.27208555076625196, -1.5365487657710908, 1.4552132754735647, 2.6180606844246386, -0.4113235967930406, -1.1474123047363012, 2.1178848650284112, 3.465205336537957, -1.9370441676229238, -15.027316610085963, -4.252257338999211, 7.928539082860946, 5.048661107173562, 4.062298538506031, 1.3037993096910416, 3.060224605965614, -4.274599226927757, -18.167797240549326, -9.62484907926023, 3.861576936458051, 6.716328361934423, 3.7743770841717716, 1.1959284252978861, -0.4881619218017906, 0.6397810547675937, -7.717005871680379, -28.156533992493152, 4.194498977513611, 7.954814510846138, 3.87463340190798, 2.7282006827935574, 1.4165326855540274, 0.6354925637934357, -0.7810640140928328, -14.634396319663523, -19.670302574682236, 8.686715411710738, 6.377264164862036, 5.021166366526484, 5.048519068354368, 3.2256367019623515, 1.6074930643051861, -0.6590694003444164, -2.9594670607089997, -2.6637279183611273, -1.0669516245119273, -0.33860611457396295, -0.163596936333552 ]
};

var epsilon = 7.77;

var fbaseRoot = new Firebase('https://justdanceforme.firebaseio.com/');
var users = firebase.child('users')
var gameState = firebase.child('gameState');
// var modelData = {
//   "axs" : [ -0.007626153775930288, -0.02755975044099614, -0.0022414850416767875, -0.1541582777882926, -0.17772274804804472, -0.170938366871234, 0.9670639939576386, 1.619330217093229, -1.2542306844018398, 1.8909787281490862, -1.996126032797247, -2.1840936594732105, -0.4865169676063582, -0.630180794186145, -3.8496851308733224, 0.7429020412199199, 0.4185867927290499, 0.5787138244623318, -5.250667780596017, -1.0815963090013712, -1.7058286431118845, -0.7126927078519016, -1.5103065094031394, 0.2651281145774759, -0.9770861332129687, 0.9285335530985146, -0.6160816147502511, 0.9612330958470702, -3.206497993989289, 1.2946224621534346, -1.886475279249996, -1.5934546020805835, -0.8760377152509987, 1.8342656379327178, 1.163137551004067, -0.7073368799071759, -0.9991296227168291, 0.20360022622421384, -1.4152213106945157, -2.811286962281167, 0.4345858144368976, -0.6563141102869063, -0.8522286773793399, -3.714498077270388, 0.16852673915224148, -1.0410447375781833, -1.3182675416350365, -1.3681066544286906, 1.0002871952541172, 4.531063174463808, 8.196112745693325, -2.193283220361918, -21.428920850956438, -15.2400814088881, -3.094777740691602, 0.39392563154008237, 1.342261580684781, 5.247368154528737, 9.313387759384513, -7.238696870046853, -17.766570894074437, -16.975446235346794, -10.142177255117893, -0.9221035931162536, 2.8356150555908677, 4.6167660661906, 4.787452010937034, 9.89022260169983, -15.234814866662024, -28.26506100270748, -14.33454944973588, -2.7612223701685665, 1.3193915772289038, 1.691247890704125, 3.7435023456975816, 4.695774136453867, 0.38007140330858524, -24.489659836184977, -25.76778241443634, -12.208921569365263, -3.1453406377151607, -0.17781342200618236, 1.5664413613401353, 1.7597746067024767, 1.411770293457806, 0.9777676857363432, 0.36728984580989926, -0.3245298045570031, -0.3078650124168023, -0.5790343251209705 ],
//   "ays" : [ -0.05136560997487977, -0.08363252432667649, 0.16985139361843465, 0.2505126013835892, 0.4337767265437171, -1.85959253302142, -7.300295540347695, -8.473211777240037, 1.4642176890537142, 13.757412409603594, 4.071348398663103, 6.355412983059883, 8.341369942411779, -13.447518777436017, -10.355137284231185, -2.2171533407710493, -6.915314810752868, -7.06081926023066, 15.787567991644144, 7.200783611238002, 0.3940056745063513, 6.962464099940657, 5.94515401982367, -4.9150458329319955, -8.2492194819808, -4.5889574372887605, -7.327073072636127, -8.909288487821817, 12.445009960609674, 8.027069599717855, 2.5160747664168475, 5.287916438016295, 3.952314607481658, -7.885132487332821, -6.333516208550334, -4.05317093693763, -2.812181280772388, -5.910531619253755, -6.2699243186056615, 14.226484211814403, 5.414268443256616, 0.7771072392910718, 3.0605545685723423, 6.621018560689687, 0.5969612826840952, -11.260431927496194, -2.639576642923057, -0.21680813764249904, 0.42850897874124344, 4.237977469234168, 7.784507628545165, 7.201246552574634, 3.028536505281925, 2.7010665921524164, 7.771438888135552, 6.031767304393648, 6.393660003867745, 8.418978667271137, 12.170465874242781, 10.433070418739318, 0.6001619418889284, 0.37486123091224577, 6.195996328085661, 9.578384849727152, 7.678040473470092, 6.491614766663313, 7.2975821897357696, 13.93532567525506, 15.710822605615853, -3.426117188730836, 5.193099973246455, 9.205746884354948, 7.719013704371452, 6.300600611898303, 7.22027741625905, 9.716744103625416, 12.308736865335701, 1.1853702794697134, -2.233739587782323, 7.093218724054098, 8.952218698009847, 7.168285363215207, 4.989727856689691, 2.9276594252988692, 1.6248158088974654, -0.08541990093379281, -0.8164624405365437, -1.1382358225248754, -0.6961285996071994, -0.3277204903570935 ],
//   "azs" : [ 0.05658635856416076, 0.15670447340607643, 0.10985305292000994, -0.07574408633152488, -0.6892288301561027, 0.217154686057847, -0.19298269662531092, 2.405349223244935, 4.776486964808404, -5.76988103954792, 2.554933197121322, 0.42499563685804603, -1.0085346529871224, 2.325361202033609, -2.2755903321705757, -2.7233213863193986, 0.09293593911970965, 1.3781471330583095, 3.995913218450546, -4.926702368456125, 2.832354592490196, -0.9138060126312076, 1.145719529343769, 5.51704141998887, 1.215428221668303, -2.9791508353441953, -1.454651257676631, 2.7494655891403554, 3.564003564420342, -2.619641523875296, 2.458090779481828, -2.472080141867697, 0.3633654754403978, 5.229360204151273, -1.1235281558018178, -3.8092385541945695, -0.7590468280740081, 1.1050484962593763, 1.7607966432265936, 4.909306412497163, -2.0334866261594, 0.4240280704675242, 0.27208555076625196, -1.5365487657710908, 1.4552132754735647, 2.6180606844246386, -0.4113235967930406, -1.1474123047363012, 2.1178848650284112, 3.465205336537957, -1.9370441676229238, -15.027316610085963, -4.252257338999211, 7.928539082860946, 5.048661107173562, 4.062298538506031, 1.3037993096910416, 3.060224605965614, -4.274599226927757, -18.167797240549326, -9.62484907926023, 3.861576936458051, 6.716328361934423, 3.7743770841717716, 1.1959284252978861, -0.4881619218017906, 0.6397810547675937, -7.717005871680379, -28.156533992493152, 4.194498977513611, 7.954814510846138, 3.87463340190798, 2.7282006827935574, 1.4165326855540274, 0.6354925637934357, -0.7810640140928328, -14.634396319663523, -19.670302574682236, 8.686715411710738, 6.377264164862036, 5.021166366526484, 5.048519068354368, 3.2256367019623515, 1.6074930643051861, -0.6590694003444164, -2.9594670607089997, -2.6637279183611273, -1.0669516245119273, -0.33860611457396295, -0.163596936333552 ]
// };

// var epsilon = 3.0;


$(function() {
    'use strict';

	if (window.DeviceMotionEvent) {
		window.ondevicemotion = function(event) {
			var ax = event.acceleration.x;
			var ay = event.acceleration.y;
			var az = event.acceleration.z;
			// var rotation = event.rotationRate;

			$('ax').text(ax);
			$('ay').text(ay);
			$('az').text(az);

			var a = [ax, ay, az];

			// a = coordinateTransformation(a);

			a[0] = Math.abs(a[0]);
			a[1] = Math.abs(a[1]);
			a[2] = Math.abs(a[2]);

			// update max values
			// if (a[0] > maxX) {
			// 	maxX = a[0];
			// }

			// if (a[1] > maxX) {
			// 	maxY = a[1];
			// }

<<<<<<< HEAD
			// if (a[2] > maxX) {
			// 	maxZ = a[2];
			// }
		}
=======
			if (a[2] > maxX) {
				maxZ = a[2];
			}
		};
>>>>>>> 70a4c50472e43d19b39cdda099ad4904f4046d3b

		window.ondeviceorientation = function(event) {
			alpha = Math.round(event.alpha) - cal[0];
			beta = Math.round(event.beta) - cal[1];
			gamma = Math.round(event.gamma) - cal[2];

			$('alpha').text(alpha);
			$('beta').text(beta);
			$('gamma').text(gamma);
		};

		$('#calibrate').click(function() {
			cal[0] = Number($('alpha').text());
			cal[1] = Number($('beta').text());
			cal[2] = Number($('gamma').text());

			// $(this).css('display', 'none');
			$('#link').removeClass('disabled');
		});
	}
<<<<<<< HEAD
}

var tempX = 0;
var tempY = 0;
var tempZ = 0;

$(function() {
	init();

	// ready to start the game
	$('#ready').click(function() {
		// access firebase and synchronize beginning

		// game start is synchronized
		// gameState.on('value', function(snapshot) {

		// });

		// window.setInterval(function() {
		// 	bufferX.push(a[0]);
		// 	bufferY.push(a[1]);
		// 	bufferZ.push(a[2]);
		// }, 100);

		// window.setInterval(function() {
		// 	tempX = bufferX.shift();
		// 	tempY = bufferY.shift();
		// 	tempZ = bufferZ.shift();

		// }, 1000);

    fbaseRoot.authAnonymously(function(error, authData) {
        if(error) {
            throw error;
        }
        console.log('authenticated');
        console.log(authData);
        // link to computer
        $('#link').on('click', function() {
            console.log('Clicked link');
            // access firebase and synchronize with laptop
            var code = $('#authCode').val();
            console.log('Linking with code: ' + code);
            if (code) {
                fbaseRoot.child('authCodes').child(code).once('value', function(snapshot) {
                    // If code has been entered
                    if(snapshot.exists()) {
                        fbaseRoot.child('authCodes').child(code).update({
                            mobile: authData.uid
                        }, function() {
                            console.log('Synced auth uids');
                            $('#ready').removeClass('disabled');
                        });
                    } else {
                        alert('That code is invalid. Please try again.');
                    }
                });
            }
        });

    	// ready to start the game
    	$('#ready').click(function() {
    		// access firebase and synchronize beginning

    	});
    });
});
