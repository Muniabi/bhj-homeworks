document.addEventListener("DOMContentLoaded", function () {
    const tooltips = document.querySelectorAll(".has-tooltip");

    let activeTooltip = null;

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener("click", function (event) {
            event.preventDefault();

            if (activeTooltip) {
                activeTooltip.remove();
                activeTooltip = null;
            }

            const tooltipContent = tooltip.getAttribute("title");
            const position = tooltip.getAttribute("data-position") || "bottom";

            const tooltipElement = document.createElement("div");
            tooltipElement.classList.add("tooltip", "tooltip_active");
            tooltipElement.textContent = tooltipContent;

            document.body.appendChild(tooltipElement);

            const rect = tooltip.getBoundingClientRect();
            const tooltipRect = tooltipElement.getBoundingClientRect();

            switch (position) {
                case "top":
                    tooltipElement.style.top = `${
                        rect.top - tooltipRect.height
                    }px`;
                    tooltipElement.style.left = `${rect.left}px`;
                    break;
                case "bottom":
                    tooltipElement.style.top = `${rect.bottom}px`;
                    tooltipElement.style.left = `${rect.left}px`;
                    break;
                case "left":
                    tooltipElement.style.top = `${rect.top}px`;
                    tooltipElement.style.left = `${
                        rect.left - tooltipRect.width
                    }px`;
                    break;
                case "right":
                    tooltipElement.style.top = `${rect.top}px`;
                    tooltipElement.style.left = `${rect.right}px`;
                    break;
                default:
                    tooltipElement.style.top = `${rect.bottom}px`;
                    tooltipElement.style.left = `${rect.left}px`;
            }

            activeTooltip = tooltipElement;
        });
    });

    document.addEventListener("click", function (event) {
        if (activeTooltip && !event.target.classList.contains("has-tooltip")) {
            activeTooltip.remove();
            activeTooltip = null;
        }
    });
});
