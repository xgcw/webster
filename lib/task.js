/**
 * Copyright (c) 2017 5u9ar (zhuyingda)
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const uuidv4 = require('uuid/v4');

class Task {
    constructor(option) {
        this.id = uuidv4();
        this.spiderType = option.spiderType || 'plain'; // plain or browser
        this.channel = option.channel; // task channel
        this.createTime = new Date().getTime();
        this.url = option.url;
        this.targets = option.targets;
    }
    dump() {
        return {
            id: this.id,
            spiderType: this.spiderType,
            channel: this.channel,
            createTime: this.createTime,
            url: this.url,
            targets: this.targets
        }
    }
}

module.exports = Task;