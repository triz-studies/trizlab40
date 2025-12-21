(function () {
    // Skip navbar when loaded inside an iframe (e.g., in triz-app.html SPA)
    if (window.self !== window.top) {
        return; // Exit early if inside iframe
    }

    const principles = [
        { id: 1, title: 'Phân nhỏ', file: 'index_01.html', summary: 'Chia vật lớn thành nhiều phần nhỏ.' },
        { id: 2, title: 'Tách khỏi', file: 'index_02.html', summary: 'Bỏ phần gây phiền phức đi.' },
        { id: 3, title: 'Phẩm chất cục bộ', file: 'index_03.html', summary: 'Làm một chỗ đặc biệt tốt.' },
        { id: 4, title: 'Phản đối xứng', file: 'index_04.html', summary: 'Để các mặt khác nhau để hoạt động tốt hơn.' },
        { id: 5, title: 'Kết hợp', file: 'index_05.html', summary: 'Gộp các thứ lại để làm việc cùng nhau.' },
        { id: 6, title: 'Vạn năng', file: 'index_06.html', summary: 'Một công cụ làm được nhiều việc.' },
        { id: 7, title: 'Chứa trong', file: 'index_07.html', summary: 'Đặt thứ này trong thứ kia để tiết kiệm chỗ.' },
        { id: 8, title: 'Phản trọng lượng', file: 'index_08.html', summary: 'Thêm trọng lượng bên kia để cân bằng.' },
        { id: 9, title: 'Gây ứng suất sơ bộ', file: 'index_09.html', summary: 'Đệm lót trước khi va chạm xảy ra.' },
        { id: 10, title: 'Thực hiện sơ bộ', file: 'index_10.html', summary: 'Chuẩn bị sớm để bắt đầu nhanh.' },
        { id: 11, title: 'Dự phòng', file: 'index_11.html', summary: 'Dùng đồ mềm để đỡ khi ngã.' },
        { id: 12, title: 'Đẳng thế', file: 'index_12.html', summary: 'Giữ đường đi phẳng và dễ dàng.' },
        { id: 13, title: 'Đảo ngược', file: 'index_13.html', summary: 'Lật ngược lại để có kết quả mới.' },
        { id: 14, title: 'Cầu (tròn) hóa', file: 'index_14.html', summary: 'Hình tròn trượt dễ và an toàn.' },
        { id: 15, title: 'Linh động', file: 'index_15.html', summary: 'Để nó điều chỉnh theo nhu cầu.' },
        { id: 16, title: 'Giải "thiếu" hoặc "thừa"', file: 'index_16.html', summary: 'Cố ý dùng ít hơn hoặc nhiều hơn một chút.' },
        { id: 17, title: 'Chuyển sang chiều khác', file: 'index_17.html', summary: 'Dùng không gian lên xuống, không chỉ phẳng.' },
        { id: 18, title: 'Sử dụng các dao động cơ học', file: 'index_18.html', summary: 'Lắc hoặc rung để giúp hoạt động.' },
        { id: 19, title: 'Tác động theo chu kỳ', file: 'index_19.html', summary: 'Đổi nỗ lực liên tục thành nhịp để tiết kiệm năng lượng.' },
        { id: 20, title: 'Liên tục tác động có ích', file: 'index_20.html', summary: 'Biến động tác ngắt quãng thành dòng chảy liên tục.' },
        { id: 21, title: '"Vượt nhanh"', file: 'index_21.html', summary: 'Bỏ qua bước chậm để tránh lãng phí.' },
        { id: 22, title: 'Biến hại thành lợi', file: 'index_22.html', summary: 'Biến điểm xấu thành điểm tốt.' },
        { id: 23, title: 'Quan hệ phản hồi', file: 'index_23.html', summary: 'Cảm nhận và thích nghi theo thời gian thực.' },
        { id: 24, title: 'Sử dụng trung gian', file: 'index_24.html', summary: 'Dùng lớp trung gian để kết nối các phần.' },
        { id: 25, title: 'Tự phục vụ', file: 'index_25.html', summary: 'Để hệ thống tự cung cấp những gì cần.' },
        { id: 26, title: 'Sao chép (copy)', file: 'index_26.html', summary: 'Sao chép khi bản gốc đắt hoặc rủi ro.' },
        { id: 27, title: '"Rẻ" thay cho "đắt"', file: 'index_27.html', summary: 'Dùng đồ rẻ, dùng một lần thay cho đồ quý.' },
        { id: 28, title: 'Thay thế sơ đồ cơ học', file: 'index_28.html', summary: 'Thay chuyển động vật lý bằng cảm biến hoặc tự động.' },
        { id: 29, title: 'Sử dụng các kết cấu khí và lỏng', file: 'index_29.html', summary: 'Dùng không khí hoặc chất lỏng để đệm hoặc tạo lực.' },
        { id: 30, title: 'Sử dụng vỏ dẻo và màng mỏng', file: 'index_30.html', summary: 'Bọc bằng lớp mềm để bảo vệ mà không cồng kềnh.' },
        { id: 31, title: 'Sử dụng vật liệu nhiều lỗ', file: 'index_31.html', summary: 'Thêm lỗ nhỏ để mọi thứ đi qua.' },
        { id: 32, title: 'Thay đổi màu sắc', file: 'index_32.html', summary: 'Dùng màu sắc để gửi thông điệp.' },
        { id: 33, title: 'Đồng nhất', file: 'index_33.html', summary: 'Làm từ cùng chất liệu để hoạt động cùng nhau.' },
        { id: 34, title: 'Phân hủy hoặc tái sinh các phần', file: 'index_34.html', summary: 'Dùng hết hoặc trả lại khi xong.' },
        { id: 35, title: 'Thay đổi các thông số hóa lý', file: 'index_35.html', summary: 'Thay đổi nhiệt độ, áp suất hoặc cài đặt khác.' },
        { id: 36, title: 'Sử dụng chuyển pha', file: 'index_36.html', summary: 'Dùng đông đặc, tan chảy hoặc sôi để hỗ trợ.' },
        { id: 37, title: 'Sử dụng sự nở nhiệt', file: 'index_37.html', summary: 'Nóng làm giãn ra; lạnh làm co lại.' },
        { id: 38, title: 'Sử dụng chất oxy hóa mạnh', file: 'index_38.html', summary: 'Dùng thêm oxy hoặc năng lượng cho phản ứng mạnh.' },
        { id: 39, title: 'Thay đổi độ trơ', file: 'index_39.html', summary: 'Dùng khí trơ để giữ an toàn và ổn định.' },
        { id: 40, title: 'Sử dụng vật liệu hợp thành', file: 'index_40.html', summary: 'Xếp lớp các vật liệu khác nhau để siêu bền.' },
    ];

    const match = window.location.pathname.match(/index_(\d+)\.html$/);
    const currentId = match ? Number(match[1]) : null;
    const currentIndex = principles.findIndex((item) => item.id === currentId);
    const current = currentIndex >= 0 ? principles[currentIndex] : null;
    const prev = currentIndex > 0 ? principles[currentIndex - 1] : null;
    const next = currentIndex >= 0 && currentIndex < principles.length - 1 ? principles[currentIndex + 1] : null;

    function createNav() {
        if (document.querySelector('.triz-nav')) return;

        const nav = document.createElement('nav');
        nav.className = 'triz-nav';

        const chips = principles
            .map((item) => {
                const isActive = item.id === currentId;
                const classes = ['nav-chip', isActive ? 'active' : ''].filter(Boolean).join(' ');
                return `<a class="${classes}" href="${item.file}"><strong>${item.id}</strong><span>${item.title}</span></a>`;
            })
            .join('');

        nav.innerHTML = `
            <div class="nav-top">
                <div class="nav-brand">TRIZ Lab · 1-40</div>
                <div class="nav-search">
                    <input type="text" id="triz-search" placeholder="🔍 Tìm nguyên lý..." />
                </div>
            </div>
            <div class="nav-grid">
                ${chips}
            </div>
        `;

        document.body.insertBefore(nav, document.body.firstChild);
    }

    function createSummaryCard() {
        if (!current || document.querySelector('.principle-summary')) return;

        const card = document.createElement('section');
        card.className = 'principle-summary';

        card.innerHTML = `
            <div class="pill">Nguyên tắc ${current.id}</div>
            <div>
                <h2>${current.title}</h2>
                <p>${current.summary}</p>
            </div>
        `;

        const nav = document.querySelector('.triz-nav');
        if (nav) {
            nav.insertAdjacentElement('afterend', card);
        } else {
            document.body.insertBefore(card, document.body.firstChild);
        }
    }

    function setupSearch() {
        const searchInput = document.getElementById('triz-search');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const chips = document.querySelectorAll('.nav-chip');

            chips.forEach((chip, index) => {
                const principle = principles[index];
                const searchText = `${principle.id} ${principle.title} ${principle.summary}`.toLowerCase();

                if (query === '' || searchText.includes(query)) {
                    chip.style.display = '';
                    chip.style.opacity = '1';
                } else {
                    chip.style.display = 'none';
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        createNav();
        createSummaryCard();
        setupSearch();
    });
})();
