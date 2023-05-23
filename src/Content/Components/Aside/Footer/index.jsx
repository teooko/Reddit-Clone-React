import { Policy } from "./Policy"
import { Languages } from "./Languages"

export const Footer = () => {
    return (
        <div class="card" id="footer">
            <Policy />
            <hr class="footerDivider" />
            <Languages />
            <hr class="footerDivider" />
            <div class="copyright">Reddit Inc &copy; 2023. All rights reserved</div>
        </div>
    )
}
