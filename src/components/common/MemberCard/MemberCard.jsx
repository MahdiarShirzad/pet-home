import React from "react";
import styles from "./MemberCard.module.css";

const MemberCard = ({ member }) => {
  return (
    <div className={styles.card_section}>
      <div className={`${styles.card_item} ${styles.card_users}`}>
        <div className="flex items-center justify-center">
          <img
            className="rounded-full p-1 w-32 border-2"
            src={member.avatar}
            alt=""
          />
        </div>
        <div className="mt-4">
          <h5 className="font-yekanBold text-xl">{member.name}</h5>
          <p className="font-yekanSemiBold mt-3 text-[#FFAA00]">
            {member.position}
          </p>
          <p className="mt-4 font-yekanReg text-sm leading-6">{member.dec}</p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <svg
            width="26"
            height="26"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9851 32.533C17.9934 32.533 15.1745 31.132 12.9465 24.4309L11.7311 20.785L8.08521 19.5697C1.40099 17.3416 0 14.5228 0 12.531C0 10.5561 1.40099 7.72039 8.08521 5.47544L22.4158 0.698585C25.9942 -0.499848 28.9818 -0.145382 30.8217 1.67759C32.6615 3.50056 33.016 6.50508 31.8176 10.0835L27.0407 24.4141C24.7958 31.132 21.9769 32.533 19.9851 32.533ZM8.87854 7.88919C4.18608 9.45897 2.51502 11.3157 2.51502 12.531C2.51502 13.7463 4.18608 15.603 8.87854 17.1559L13.1321 18.5738C13.5035 18.692 13.8073 18.9958 13.9255 19.3671L15.3433 23.6207C16.8962 28.3132 18.7698 29.9842 19.9851 29.9842C21.2005 29.9842 23.0572 28.3132 24.627 23.6207L29.4038 9.29017C30.2647 6.69075 30.1128 4.56396 29.0156 3.4668C27.9184 2.36964 25.7916 2.23461 23.2091 3.09545L8.87854 7.88919Z"
              fill="#292D32"
            ></path>
            <path
              d="M13.0484 20.3293C12.7276 20.3293 12.4069 20.2112 12.1537 19.958C11.6642 19.4685 11.6642 18.6583 12.1537 18.1688L18.1966 12.1091C18.6861 11.6196 19.4963 11.6196 19.9858 12.1091C20.4753 12.5986 20.4753 13.4088 19.9858 13.8983L13.943 19.958C13.7066 20.2112 13.3691 20.3293 13.0484 20.3293Z"
              fill="#292D32"
            ></path>
          </svg>
          <svg
            width="28"
            height="28"
            viewBox="0 0 38 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6403 35.073H14.3903C6.01905 35.073 2.44238 31.4963 2.44238 23.125V13.875C2.44238 5.50379 6.01905 1.92712 14.3903 1.92712H23.6403C32.0115 1.92712 35.5882 5.50379 35.5882 13.875V23.125C35.5882 31.4963 32.0115 35.073 23.6403 35.073ZM14.3903 4.23962C7.28322 4.23962 4.75488 6.76796 4.75488 13.875V23.125C4.75488 30.2321 7.28322 32.7605 14.3903 32.7605H23.6403C30.7474 32.7605 33.2757 30.2321 33.2757 23.125V13.875C33.2757 6.76796 30.7474 4.23962 23.6403 4.23962H14.3903Z"
              fill="#292D32"
              stroke="#292D32"
              stroke-width="0.5"
            ></path>
            <path
              d="M19.0155 25.052C15.408 25.052 12.4634 22.1075 12.4634 18.5C12.4634 14.8925 15.408 11.9479 19.0155 11.9479C22.623 11.9479 25.5675 14.8925 25.5675 18.5C25.5675 22.1075 22.623 25.052 19.0155 25.052ZM19.0155 14.2604C16.6721 14.2604 14.7759 16.1566 14.7759 18.5C14.7759 20.8433 16.6721 22.7395 19.0155 22.7395C21.3588 22.7395 23.255 20.8433 23.255 18.5C23.255 16.1566 21.3588 14.2604 19.0155 14.2604Z"
              fill="#292D32"
              stroke="#292D32"
              stroke-width="0.5"
            ></path>
            <path
              d="M26.7238 11.5625C26.5234 11.5625 26.323 11.5162 26.138 11.4391C25.953 11.3621 25.7834 11.2541 25.6292 11.1154C25.4905 10.9612 25.3671 10.7916 25.29 10.6066C25.213 10.4216 25.1821 10.2212 25.1821 10.0208C25.1821 9.82039 25.213 9.61997 25.29 9.43497C25.3825 9.23456 25.4905 9.08039 25.6292 8.92622C25.7063 8.86456 25.7834 8.78747 25.8605 8.74122C25.953 8.67956 26.0455 8.63331 26.138 8.60247C26.2305 8.55622 26.323 8.52539 26.4309 8.50997C26.9242 8.40206 27.4484 8.57164 27.8184 8.92622C27.9571 9.08039 28.065 9.23456 28.1421 9.43497C28.2192 9.61997 28.2655 9.82039 28.2655 10.0208C28.2655 10.2212 28.2192 10.4216 28.1421 10.6066C28.065 10.7916 27.9571 10.9612 27.8184 11.1154C27.6642 11.2541 27.4946 11.3621 27.3096 11.4391C27.1246 11.5162 26.9242 11.5625 26.7238 11.5625Z"
              fill="#292D32"
              stroke="#292D32"
              stroke-width="0.5"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;