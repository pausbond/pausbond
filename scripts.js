document.onkeydown = function (evt) {
	evt = evt || window.event;
	var isEscape = false;
	if ("key" in evt) {
		isEscape = (evt.key === "Escape" || evt.key === "Esc");
	} else {
		isEscape = (evt.keyCode === 27);
	}
	if (isEscape) {
		document.getElementById("contactMePopup").style["display"] = "none"
	}
};

var popupiconClose = document.getElementById("popupiconClose");
if (popupiconClose) {
	popupiconClose.addEventListener("click", function (e) {
		var popup = e.currentTarget.parentNode;
		function isOverlay(node) {
			return !!(
				node &&
				node.classList &&
				node.classList.contains("popup-overlay")
			);
		}
		while (popup && !isOverlay(popup)) {
			popup = popup.parentNode;
		}
		if (isOverlay(popup)) {
			popup.style.display = "none";
		}
	});
}

const popuppavelbond1ru = document.getElementById("popuppavelbond1ru");
if (popuppavelbond1ru) {
	popuppavelbond1ru.addEventListener("click", function () {
		window.location.href = "mailto:pavel@bond1.ru";
	});
}

const popuptext = document.getElementById("popuptext");
if (popuptext) {
	popuptext.addEventListener("click", function () {
		window.location.href = "mailto:pavel@bond1.ru";
	});
}

var popupvk = document.getElementById("popupvk");
if (popupvk) {
	popupvk.addEventListener("click", function () {
		window.open("https://vk.com/pausb");
	});
}

var popuptg = document.getElementById("popuptg");
if (popuptg) {
	popuptg.addEventListener("click", function () {
		window.open("https://t.me/PausBond");
	});
}

var popuplinkedin = document.getElementById("popuplinkedin");
if (popuplinkedin) {
	popuplinkedin.addEventListener("click", function () {
		window.open("https://www.linkedin.com/in/pavel-bondarenko-5aa09756/");
	});
}
var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting || entry.intersectionRatio > 0) {
				const targetElement = entry.target;
				targetElement.classList.add("animate");
				observer.unobserve(targetElement);
			}
		}
	},
	{
		threshold: 0.15,
	}
);

for (let i = 0; i < scrollAnimElements.length; i++) {
	observer.observe(scrollAnimElements[i]);
}

var downloadBtn = document.getElementById("contact");
if (downloadBtn) {
	downloadBtn.addEventListener("click", function () {
		var popup = document.getElementById("contactMePopup");
		if (!popup) return;
		var popupStyle = popup.style;
		if (popupStyle) {
			popupStyle.display = "flex";
			popupStyle.zIndex = 100;
			popupStyle.backgroundColor = "rgba(10, 10, 10, 0.5)";
			popupStyle.alignItems = "center";
			popupStyle.justifyContent = "center";
		}
		popup.setAttribute("closable", "");

		var onClick =
			popup.onClick ||
			function (e) {
				if (e.target === popup && popup.hasAttribute("closable")) {
					popupStyle.display = "none";
				}
			};
		popup.addEventListener("click", onClick);
	});
}

var vk = document.getElementById("vk");
if (vk) {
	vk.addEventListener("click", function () {
		window.open("https://vk.com/pausb");
	});
}

var tg = document.getElementById("tg");
if (tg) {
	tg.addEventListener("click", function () {
		window.open("https://t.me/PausBond");
	});
}

var linkedin = document.getElementById("linkedin");
if (linkedin) {
	linkedin.addEventListener("click", function () {
		window.open("https://www.linkedin.com/in/pavel-bondarenko-5aa09756/");
	});
}

var downloadBtn1 = document.getElementById("downloadBtn1");
if (downloadBtn1) {
	downloadBtn1.addEventListener("click", function () {
		window.open("https://github.com/pausbond/pausbond/raw/main/resume.pdf");
	});
}

var case1Image = document.getElementById("case_1");
if (case1Image) {
	case1Image.addEventListener("click", function () {
		window.open(
			"https://www.behance.net/gallery/120329985/kvartet-vkusov-%28App%29"
		);
	});
}

var case2Image = document.getElementById("case_3");
if (case2Image) {
	case2Image.addEventListener("click", function () {
		window.open("https://www.behance.net/gallery/94455803/DNS-GROUP");
	});
}

var case3Image = document.getElementById("case_5");
if (case3Image) {
	case3Image.addEventListener("click", function () {
		window.open("https://www.behance.net/gallery/89773927/HD-Videobox-app");
	});
}

var case4Image = document.getElementById("case_2");
if (case4Image) {
	case4Image.addEventListener("click", function () {
		window.open(
			"https://www.behance.net/gallery/116298143/Instagram-Kids-Concept"
		);
	});
}

var case5Image = document.getElementById("case_4");
if (case5Image) {
	case5Image.addEventListener("click", function () {
		window.open("https://www.behance.net/gallery/90478585/sajt-kvartet-vkusov");
	});
}

var case6Image = document.getElementById("case_6");
if (case6Image) {
	case6Image.addEventListener("click", function () {
		window.open("https://www.behance.net/gallery/89467043/TV-Launcher-Concept");
	});
}

var vk1 = document.getElementById("vk1");
if (vk1) {
	vk1.addEventListener("click", function () {
		window.open("https://vk.com/pausb");
	});
}

var tg1 = document.getElementById("tg1");
if (tg1) {
	tg1.addEventListener("click", function () {
		window.open("https://t.me/PausBond");
	});
}

var linkedin1 = document.getElementById("linkedin1");
if (linkedin1) {
	linkedin1.addEventListener("click", function () {
		window.open("https://www.linkedin.com/in/pavel-bondarenko-5aa09756/");
	});
}

const tabs = document.querySelector('.tabs').querySelectorAll('label');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach((item) => {
			item.classList.remove('label-tab_active');
		});
		tab.classList.add('label-tab_active');
	});
});
