

export const SocialLinks = ({ links: { instagram, twitter, facebook, linkedin } }) => {
    return <ul>
        <li>
            <a href={instagram}>Instagram</a>
        </li>

        <li>
            <a href={twitter}>Twitter</a>
        </li>

        <li>
            <a href={facebook}>Facebook</a>
        </li>

        <li>
            <a href={linkedin}>Linkedin</a>
        </li>
    </ul>
}