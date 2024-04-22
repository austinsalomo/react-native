import React from "react";
import Accordion from "./accordion";


function Cards() {
    return (
        <div className="cards">
            <h1>The Dispensables</h1>
            <p> Dispensables adalah istilah yang digunakan untuk merujuk kepada hal-hal atau orang-orang yang dianggap tidak penting atau tidak dibutuhkan dalam suatu situasi atau konteks tertentu. </p>
            <div className="cards__container">
            <br />
                <br />
                <h4>1.Comments</h4>
                <p>Comment merupakan suatu komentar yang sebenarnya ditujukan untuk memperjelas fungsi dari kode yang dibuat tetapi penambahan comment ini membuat kode menjadi tidak rapi dan efisien. Cara untuk mengatasinya adalah dengan memberikan nama method atau class dengan baik.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
                            <code>
                                public class Calculator {
                                    // This method adds two numbers
                                    public int add(int x, int y) {
                                        return x + y;
                                    }
                                    // This method subtracts two numbers
                                    public int subtract(int x, int y) {
                                        return x - y;
                                    }
                                    // This method multiplies two numbers
                                    public int multiply(int x, int y) {
                                        return x * y;
                                    }
                                    // This method divides two numbers
                                    public double divide(int x, int y) {
                                        if (y == 0) {
                                            // Handle division by zero
                                            return Double.NaN;
                                        }
                                        return (double) x / y;
                                    }
                                }
                            </code>
                            `}
                            contents={`Comment sering digunakan untuk menjelaskan apa yang dilakukan oleh kode. Namun, jika kode itu sendiri sudah cukup jelas, komentar bisa menjadi redundan dan memenuhi ruang yang tidak perlu.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            public class Calculator {
                                public int add(int x, int y) {
                                    return x + y;
                                }
                                public int subtract(int x, int y) {
                                    return x - y;
                                }
                                public int multiply(int x, int y) {
                                    return x * y;
                                }
                                public double divide(int x, int y) {
                                    if (y == 0) {
                                        return Double.NaN;
                                    }
                                    return (double) x / y;
                                }
                            }
                            `}
                            contents={`Sebelum refactoring, setiap metode diikuti oleh komentar yang menjelaskan apa yang dilakukan oleh metode tersebut. Namun, karena metode tersebut sudah cukup jelas dari namanya dan implementasinya, komentar menjadi redundan. Setelah refactoring, komentar dihapus karena tidak lagi diperlukan.`}
                        />
                    </div>
                </div>
                <br />
                <br />
                <h4>2.Duplicate Code</h4>
                <p>Duplicate Code adalah fragmen kode yang sama atau mirip yang muncul di beberapa bagian dalam program. Ini bisa menyebabkan masalah pemeliharaan dan meningkatkan risiko kesalahan. Mengidentifikasi dan menghapus kode duplikat penting untuk meningkatkan kejelasan dan efisiensi kode.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
                            public class MathOperations {
                                public int add(int x, int y) {
                                    return x + y;
                                }
                            
                                public int subtract(int x, int y) {
                                    return x-y;
                                }
                            
                                public int multiply(int x, int y) {
                                    return x * y;
                                }
                            
                                public int divide(int x, int y) {
                                    return x / y;
                                }
                            
                                public double calculateAverage(int[] numbers) {
                                    int sum = 0;
                                    for (int number : numbers) {
                                        sum += number;
                                    }
                                    return (double) sum / numbers.length;
                                }
                            }
                            `}
                            contents={`Duplicat code terjadi ketika potongan kode yang sama atau serupa muncul di beberapa tempat dalam program.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            public class MathOperations {
                                public int add(int x, int y) {
                                    return x + y;
                                }
                            
                                public int subtract(int x, int y) {
                                    return x-y;
                                }
                            
                                public int multiply(int x, int y) {
                                    return x * y;
                                }
                            
                                public int divide(int x, int y) {
                                    return x / y;
                                }
                            
                                public double calculateAverage(int[] numbers) {
                                    return sum(numbers) / (double) numbers.length;
                                }
                            
                                private int sum(int[] numbers) {
                                    int sum = 0;
                                    for (int number : numbers) {
                                        sum += number;
                                    }
                                    return sum;
                                }
                            }
                            `}
                            contents={`Sebelum refactoring, ada duplikat dalam logika untuk menghitung rata-rata di metode calculateAverage dan metode sum. Setelah refactoring, logika untuk menghitung total sudah dipisahkan ke dalam metode sum, yang kemudian digunakan di metode calculateAverage. Hal ini menghindari duplikasi kode dan membuat kode lebih bersih dan lebih mudah dipelihara.`}
                        />
                    </div>
                </div>
                <br />
                <br />
                <h4>3. Lazy Class</h4>
                <p>Lazy class merujuk pada kelas dalam sebuah program yang tidak memberikan kontribusi yang signifikan atau esensial dalam fungsionalitas sistem. Kelas tersebut mungkin terlalu sederhana, jarang digunakan, atau tidak memiliki tanggung jawab yang jelas. Pada dasarnya, kelas ini tidak memberikan nilai tambah dan dapat dianggap sebagai beban yang tidak perlu dalam kode.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
                            public class Employee {
                                private String name;
                                private String id;
                            
                                // Constructors, getters, and setters
                            }
                            `}
                            contents={`Lazy class adalah kelas yang tidak memberikan nilai tambah yang cukup signifikan dalam program. Mereka mungkin memiliki sedikit atau tidak ada metode atau logika bisnis yang kompleks.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            // Potentially refactored version
    // If additional behavior or value is added in the future
    
    public class Employee {
        private String name;
        private String id;
        private Department department;
    
        public Employee(String name, String id, Department department) {
            this.name = name;
            this.id = id;
            this.department = department;
        }
    
        public String getName() {
            return name;
        }
    
        public String getId() {
            return id;
        }
    
        public Department getDepartment() {
            return department;
        }
    
        // Additional methods can be added if necessary
    }
                            `}
                            contents={`Setelah refactoring, kita dapat menambahkan fungsionalitas atau perilaku tambahan ke dalam class Employee jika dibutuhkan di masa depan. Dalam contoh ini, kita telah menambahkan atribut Department dan metode untuk mendapatkan departemen seorang karyawan.`}
                        />
                    </div>
                </div>
                <br />
                <br />
                <h4>4. Data Class</h4>
                <p>Data class adalah struktur dalam pemrograman yang dirancang khusus untuk menyimpan data. Biasanya, data class hanya terdiri dari variabel atau properti yang mewakili data dan tidak memiliki logika bisnis atau metode lainnya. Tujuan utama data class adalah untuk menyederhanakan representasi dan manipulasi data dalam kode.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
                            public class Rectangle {
                                private double width;
                                private double height;
                            
                                // Constructors, getters, and setters
                            }
                            `}
                            contents={`Data Class adalah kelas yang hanya berisi data tanpa adanya logika bisnis tambahan. Mereka digunakan untuk menyimpan informasi tetapi tidak memiliki perilaku yang terkait dengannya.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            // Potentially refactored version
    // If additional behavior is added in the future
    
    public class Rectangle {
        private double width;
        private double height;
    
        public Rectangle(double width, double height) {
            this.width = width;
            this.height = height;
        }
    
        public double calculateArea() {
            return width * height;
        }
    
        // Additional methods can be added if necessary
    }
                            `}
                            contents={`Setelah refactoring, kita dapat menambahkan perilaku tambahan ke dalam class Rectangle jika dibutuhkan di masa depan. Dalam contoh ini, kita telah menambahkan metode calculateArea untuk menghitung luas persegi panjang.`}
                        />
                    </div>
                </div>
                <br />
                <br />
                <h4>5. Speculative Generality</h4>
                <p>Speculative Generality adalah sebuah konsep dalam pemrograman yang merujuk kepada praktik menambahkan fitur, struktur, atau abstraksi yang tidak diperlukan berdasarkan dugaan bahwa mereka mungkin berguna di masa depan. Hal ini sering kali terjadi ketika pengembang menambahkan kode yang kompleks atau abstrak tanpa alasan yang jelas atau kebutuhan aktual saat ini.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
                            public interface Shape {
                                void draw();
                                void resize();
                                void move();
                            }
                            
                            public class Circle implements Shape {
                                @Override
                                public void draw() {
                                    // Draw circle
                                }
                            
                                @Override
                                public void resize() {
                                    // Resize circle
                                }
                            
                                @Override
                                public void move() {
                                    // Move circle
                                }
                            }
                            `}
                            contents={`Sebelum refactoring, kita memiliki interface Shape dengan metode draw, resize, dan move. Namun, implementasi class Circle hanya menggunakan metode draw, sedangkan metode resize dan move tidak digunakan.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            // Potentially refactored version
    // If additional methods are needed in the future
    
    public interface Shape {
        void draw();
    }
    
    public class Circle implements Shape {
        @Override
        public void draw() {
            // Draw circle
        }
    }

                            `}
                            contents={`Setelah refactoring, kita hanya mempertahankan fungsionalitas yang dibutuhkan saat ini, yaitu metode draw, dan menghapus metode resize dan move dari interface Shape. Jika di masa depan diperlukan, kita dapat menambahkan kembali metode-metode tersebut.`}
                        />
                    </div>
                </div>
                <br />
                <br />
                <h4>6. Dead Code</h4>
                <p>Dead code merujuk kepada bagian kode dalam sebuah program yang tidak pernah dieksekusi saat aplikasi berjalan. Ini bisa terjadi karena perubahan kebutuhan atau perubahan dalam logika program yang membuat bagian kode menjadi tidak relevan, tetapi belum dihapus.</p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{paddingRight: '10px'}}>
                        <Accordion
                            title="Before"
                            content={`
                            public class Calculator {
                                public int add(int a, int b) {
                                    return a + b;
                                }
                            
                                public int subtract(int a, int b) {
                                    return a - b;
                                }
                            
                                // This method is never called
                                public int multiply(int a, int b) {
                                    return a * b;
                                }
                            
                                // This method is never called
                                public double divide(int a, int b) {
                                    if (b == 0) {
                                        return Double.NaN;
                                    }
                                    return (double) a / b;
                                }
                            }
                            `}
                            contents={`Dead Code adalah bagian dari program yang tidak pernah dipanggil atau dieksekusi.`}
                        />
                    </div>
                    <div style={{paddingLeft: '10px'}}>
                        <Accordion
                            title="After"
                            content={`
                            // Potentially refactored version
    // If methods are needed in the future
    
    public class Calculator {
        public int add(int a, int b) {
            return a + b;
        }
    
        public int subtract(int a, int b) {
            return a - b;
        }
    
        // Uncomment if needed in the future
        /*
        public int multiply(int a, int b) {
            return a * b;
        }
    
        public double divide(int a, int b) {
            if (b == 0) {
                return Double.NaN;
            }
            return (double) a / b;
        }
        */
    }
                            `}
                            contents={`Setelah refactoring, kode yang tidak pernah dipanggil atau dieksekusi di-comment untuk menghindari kebingungan dan membuat kode lebih bersih. Jika metode tersebut dibutuhkan di masa depan, komentar bisa dihapus untuk mengaktifkannya kembali.`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
