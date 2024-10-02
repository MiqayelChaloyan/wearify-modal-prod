const Logo = ({ size = 24, fill = 'white' }) => {
  return (
    <svg
      viewBox="0 0 18 18"
      width={size}
      height={size}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className="icon-cs"
    >
      <path
        opacity="0.6"
        d="M14 1.5C14 1.22386 14.2239 1 14.5 1H16H17.5C17.7761 1 18 1.22386 18 1.5C18 1.77614 17.7761 2 17.5 2H16.5V6H17C17.2761 6 17.5 6.22386 17.5 6.5C17.5 6.77614 17.2761 7 17 7H16.5V11H17C17.2761 11 17.5 11.2239 17.5 11.5C17.5 11.7761 17.2761 12 17 12H16.5V16H17.5C17.7761 16 18 16.2239 18 16.5C18 16.7761 17.7761 17 17.5 17H16H14.5C14.2239 17 14 16.7761 14 16.5C14 16.2239 14.2239 16 14.5 16H15.5V12H15C14.7239 12 14.5 11.7761 14.5 11.5C14.5 11.2239 14.7239 11 15 11H15.5V7H15C14.7239 7 14.5 6.77614 14.5 6.5C14.5 6.22386 14.7239 6 15 6H15.5V2H14.5C14.2239 2 14 1.77614 14 1.5Z"
      />
      <path
        d="M2.03599 16.5796C1.9957 16.8219 1.78137 17 1.52969 17H0.655146C0.346615 17 0.107501 16.7359 0.153991 16.4385C0.303394 15.4824 0.499937 14.6624 0.665246 14.3284C0.805304 14.0454 0.841671 13.4547 0.886497 12.7266C0.931282 11.9992 0.98451 11.1346 1.15802 10.3027C1.5052 8.6271 2.97232 8.45302 3.89067 8.37685C4.97248 8.29361 4.94795 7.57342 4.91436 6.58751L4.90981 6.45104C4.90981 6.45104 4.60743 6.18991 4.36104 5.84174C4.24905 5.67854 4.10346 5.38477 3.99146 5.01484C3.61068 5.06924 3.2635 3.83976 3.71148 3.89416C3.66668 3.64392 3.63308 3.40455 3.62188 3.18694C3.56589 2.22948 4.45064 1 6.13055 1H6.15294C7.83285 1 8.7176 2.22948 8.67281 3.17606C8.66161 3.39367 8.62801 3.64392 8.58321 3.88328C9.03119 3.82888 8.68401 5.05836 8.30323 5.00396C8.18003 5.37389 8.04564 5.66766 7.93365 5.83086C7.69846 6.18991 7.38488 6.44016 7.38488 6.44016C7.38314 6.49528 7.38125 6.54964 7.3794 6.60318C7.34531 7.58553 7.32073 8.29375 8.40402 8.36597C9.33357 8.44214 10.7895 8.6271 11.1367 10.2918C11.3102 11.1237 11.3634 11.9883 11.4082 12.7157C11.453 13.4438 11.4894 14.0345 11.6294 14.3175C11.7954 14.6529 11.9928 15.4779 12.1424 16.4387C12.1887 16.7361 11.9497 17 11.6412 17H10.7991C10.5475 17 10.3331 16.8219 10.2928 16.5796C10.2222 16.1553 10.137 15.6517 10.0727 15.3076C9.99883 14.9127 9.91891 14.61 9.84179 14.3179C9.70856 13.8132 9.58369 13.3402 9.51276 12.4787C9.08718 13.4036 8.96399 14.9921 9.04239 16.2107C9.04504 16.2503 9.04928 16.2911 9.05499 16.333C9.10087 16.6696 8.86635 17 8.51819 17H3.8101C3.46194 17 3.22742 16.6696 3.2733 16.333C3.27901 16.2911 3.28325 16.2503 3.2859 16.2107C3.3755 14.9921 3.2523 13.4036 2.81553 12.4787C2.74411 13.346 2.61805 13.8239 2.4838 14.3329C2.40752 14.6221 2.3286 14.9213 2.25556 15.3076C2.19187 15.6501 2.10653 16.1553 2.03599 16.5796Z"
      />
    </svg>
  );
};

export default Logo;
