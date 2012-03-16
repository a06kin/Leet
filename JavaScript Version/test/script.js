var Translator = {
	init: function() {
		var div = $('#leet');

		this.table(div);
		this.form(div);
	},

	form: function(div) {
		var textarea = $('textarea', div),
			input = textarea.eq(0),
			item = {},
			digit = 0;

		var encrypt = function() {
			var output = textarea.eq(1),
				leet = new Leet(digit);

			leet.item(item);
			output.val(leet.encode(input[0].value));

			if (!input[0].value.length)
				output.val(output[0].defaultValue);
		};

		input.bind('keyup input change', encrypt).toggleValue();

		//set index
		$('table tr > td').on('click', function(event) {
			if (event.target.nodeName !== 'TD')
				return this;

			$(this).addClass('selected').siblings('td').removeClass('selected');
			item[$(this).siblings('td').find('b').text()] = $(this).index() - 1;

			encrypt();
		});

		//digit mode
		$('.digit', div).click(function() {
			digit = this.checked ? 1 : 0;
			encrypt();
		});
	},

	table: function(div) {
		var leet = new Leet();

		//create table
		var table = document.createElement('table'),
			fragment = document.createDocumentFragment(),
			i = 26;

		//create rows
		while(i--)
			table.insertRow(-1);

		div.append(fragment.appendChild(table));

		//get alphabet
		var alphabet = [],
			cipher = leet.cipher;

		$.map(cipher, function(value, key) {
			alphabet.push(key);
		});

		fragment = document.createDocumentFragment();

		//create ceils
		$('table tr').each(function(i) {
			var alph = alphabet[i],
				ceil = cipher[alph];

			//set a-z
			$('<td />').appendTo(this).html('<b>' + alph + '</b>');

			//fill a-z
			var j = ceil.length, _this = this;

			$.each(ceil, function(j) {
				$('<td />').appendTo(_this).html(ceil[j]);
			});
		});
	}
};

$(function() {
	Translator.init();
});

(function($) {
	/**
	 * $.fn.toggleValue()
	 * Use: $('#input).toggleValue();
	 *
	 * @author: Alexander Guinness
	 * @version: 1.0
	 * @this: {jQuery Object}
	 * @return: {jQuery Object}
	 * @license: MIT License
	 * @date: Fri Jul 01 00:00:00 2011
	 **/
	$.fn.toggleValue = function() {
		this.bind('focus blur', function() {
			this.value = this.value == this.defaultValue ? '' : this.value || this.defaultValue;
		});
		return this;
	};
})(jQuery);