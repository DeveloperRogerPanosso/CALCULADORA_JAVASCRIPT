<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Calculadora - JavaScript</title>
</head>
<body>
	<article>
		<header>
			<h1>Calculadora - JavaScript</h1>
		</header>
		<section>
			<div>
				<form name="calculadora" method="POST">
					<input type="number" name="numero1" id="numero1" size="4" maxlength="4">
					<select name="operacao" id="operacao">
						<option value="+">+</option>
						<option value="-">-</option>
						<option value="*">*</option>
						<option value="/">/</option>
					</select>
					<input type="number" name="numero2" id="numero2" size="4" maxlength="4">
					<input type="submit" name="Calcular" onclick="return calcular()"/>
				</form>
			</div>
		</section>
	</article>
	<script type="text/javascript" src="script.js"></script>
	</script>
</body>
</html>