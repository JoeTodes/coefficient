<template>
  <div
    class="flex flex-col sm:flex-row container mx-auto my-4 sm:my-8 justify-center"
  >
    <div
      v-show="!submitted"
      class=" flex-1 font-bold font-display self-center text-xl mb-8 text-center"
    >
      Let us know how we can help you today
    </div>
    <div v-show="!submitted" class="flex-1">
      <form
        name="contact-form"
        method="post"
        @submit.prevent="handleSubmit"
        data-netlify="true"
        data-netlify-honeypoy="bot-field"
        class="flex flex-col h-full xl:w-3/4 font-display font-bold"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>Don't fill this out: <input name="bot-field"/></label>
        </p>
        <div class="flex flex-col sm:flex-row">
          <div class="p-2 flex flex-col sm:w-1/2">
            <label for="name">Name</label>
            <input
              class="form-input"
              type="text"
              id="name"
              name="name"
              required
              v-model="formData.name"
            />
          </div>
          <div class="p-2 flex flex-col sm:w-1/2">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-input"
              required
              v-model="formData.email"
            />
          </div>
        </div>
        <div class="p-2 flex flex-col w-full flex-grow">
          <label for="message">Message</label>
          <textarea
            type="textarea"
            id="message"
            name="message"
            rows="5"
            class="flex-grow form-input"
            required
            v-model="formData.message"
          />
        </div>
        <button
          class="
                        p-2
                        m-2
                        leading-5
                        rounded-sm
                        text-center
                        font-bold
                        font-display
                        self-start
                        border-gray-300 border-2
                        shadow-md
                        hover:shadow-inner
                    "
        >
          Submit
        </button>
      </form>
    </div>
    <div v-if="submitted && success" class="flex flex-col items-center">
      <font-awesome :icon="['fas', 'check-circle']" size="2x"></font-awesome>
      <div class="font-bold font-display my-4">
        Thanks for your message, we'll get back to you as soon as we can!
      </div>
    </div>
  </div></template
>

<script>
export default {
  name: "NetlifyForm",
  data() {
    return {
      formData: {},
      success: false,
      submitted: false,
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      this.submitted = true;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => (this.success = true))
        .catch((error) => alert(error));
    },
  },
};
</script>

<style scoped>
.form-input {
  @apply mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50;
}
</style>
